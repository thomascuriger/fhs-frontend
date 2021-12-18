import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '@shared/services/token-storage.service';
import { EMPTY, map, Observable } from 'rxjs';
import { Page, PageDto, Training } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrainingDataService {
  private baseUrl = '/api/training';

  constructor(
    private httpClient: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.getTrainingUrl(), this.getHttpOptions());
  }

  getOne(id: number): Observable<Training> {
    return this.httpClient
      .get<Training>(this.getTrainingUrl(id), this.getHttpOptions())
  }

  getTrainingByUserId(userId: number): Observable<any> {
    return this.httpClient.get(
      this.baseUrl.concat('/user').concat('/' + userId),
      this.getHttpOptions()
    );
  }

  createTraining(training: Training): Observable<Training> {
    return this.httpClient
      .post<Training>(this.getTrainingUrl(), training)
  }

  updateTraining(training: Training): Observable<Training> {
    return this.httpClient
      .post<Training>(this.getTrainingUrl(), training, this.getHttpOptions())
  }

  delete(training: Training): Observable<void> {
    if (!training.id) return EMPTY;
    return this.httpClient.delete<void>(`${this.baseUrl}/${training.id}`);
  }

  getTrainingUrl(id?: number) {
    if (id) {
      return this.baseUrl.concat('/' + id);
    }
    return this.baseUrl;
  }

  getHttpOptions() {
    const authToken = this.tokenStorageService.getToken();
    let params: HttpParams = new HttpParams();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + authToken
      }),
      params: params
    };
    return httpOptions;
  }
}
