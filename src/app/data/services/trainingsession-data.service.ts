import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, Observable } from 'rxjs';
import { Training, TrainingDto, Trainingsession, TrainingsessionDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrainingsessionDataService {
  private baseUrl = '/api/training';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.getTrainingsessionUrl());
  }

  getOne(id: number): Observable<Trainingsession> {
    return this.httpClient
      .get<TrainingsessionDto>(this.getTrainingsessionUrl(id))
      .pipe(map(dto => new Trainingsession(dto)));
  }

  createTraining(trainingsession: Trainingsession): Observable<Trainingsession> {
    return this.httpClient
      .post<TrainingsessionDto>(this.getTrainingsessionUrl(), trainingsession.dto)
      .pipe(map(dto => new Trainingsession(dto)));
  }

  updateTraining(trainingsession: Trainingsession): Observable<Trainingsession> {
    return this.httpClient
      .post<TrainingsessionDto>(this.getTrainingsessionUrl(), trainingsession.dto)
      .pipe(map(dto => new Trainingsession(dto)));
  }

  delete(trainingsession: Trainingsession): Observable<void> {
    if (!trainingsession.id) return EMPTY;
    return this.httpClient.delete<void>(`${this.baseUrl}/${trainingsession.id}`);
  }

  getTrainingsessionUrl(id?: number) {
    if (id) {
      return this.baseUrl.concat('/' + id);
    }
    return this.baseUrl;
  }
}
