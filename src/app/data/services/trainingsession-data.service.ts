import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '@shared/services/token-storage.service';
import { EMPTY, map, Observable } from 'rxjs';
import { Training, Trainingsession } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrainingsessionDataService {
  private baseUrl = '/api/training';

  constructor(
    private httpClient: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.getTrainingsessionUrl(), this.getHttpOptions());
  }

  getOne(id: number): Observable<Trainingsession> {
    return this.httpClient.get<Trainingsession>(
      this.getTrainingsessionUrl(id),
      this.getHttpOptions()
    );
  }

  createTrainingsession(trainingsession: Trainingsession): Observable<Trainingsession> {
    console.log(JSON.stringify(trainingsession), 'in service');
    return this.httpClient.post<Trainingsession>(
      this.getTrainingsessionUrl(),
      JSON.stringify(trainingsession), this.getHttpOptions()
    );
  }

  updateTraining(trainingsession: Trainingsession): Observable<Trainingsession> {
    return this.httpClient.post<Trainingsession>(
      this.getTrainingsessionUrl(),
      trainingsession,
      this.getHttpOptions()
    );
  }

  delete(trainingsession: Trainingsession): Observable<void> {
    if (!trainingsession.id) return EMPTY;
    return this.httpClient.delete<void>(
      `${this.baseUrl}/${trainingsession.id}`,
      this.getHttpOptions()
    );
  }

  getTrainingsessionUrl(id?: number) {
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
