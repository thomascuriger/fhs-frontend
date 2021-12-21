import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '@shared/services/token-storage.service';
import { TrainingUtils } from '@shared/util/training-utils';
import { EMPTY, Observable } from 'rxjs';
import { Trainingsession } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrainingsessionDataService {
  private baseUrl = '/api/trainingsession';

  constructor(
    private httpClient: HttpClient,
    private tokenStorageService: TokenStorageService,
    private trainingUtils: TrainingUtils
  ) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.getTrainingsessionUrl(), this.trainingUtils.getHttpOptions());
  }

  getOne(id: number): Observable<Trainingsession> {
    return this.httpClient.get<Trainingsession>(
      this.getTrainingsessionUrl(id),
      this.trainingUtils.getHttpOptions()
    );
  }

  createTrainingsession(trainingsession: Trainingsession): Observable<Trainingsession> {
    return this.httpClient.post<Trainingsession>(
      this.getTrainingsessionUrl(),
      JSON.stringify(trainingsession),
      this.trainingUtils.getHttpOptions()
    );
  }

  updateTrainingsession(trainingsession: Trainingsession): Observable<Trainingsession> {
    return this.httpClient.put<Trainingsession>(
      this.getTrainingsessionUrl(trainingsession.id),
      JSON.stringify(trainingsession),
      this.trainingUtils.getHttpOptions()
    );
  }

  delete(trainingsession: Trainingsession): Observable<void> {
    if (!trainingsession.id) return EMPTY;
    return this.httpClient.delete<void>(
      `${this.baseUrl}/${trainingsession.id}`,
      this.trainingUtils.getHttpOptions()
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
