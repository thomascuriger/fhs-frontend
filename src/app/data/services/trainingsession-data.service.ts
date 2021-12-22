import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingUtils } from '@shared/util/training-utils';
import { EMPTY, Observable } from 'rxjs';
import { Trainingsession } from '../models';

const TRAININGSESSION_API = 'http://localhost:8080/api/trainingsession/'; // if electron
// const TRAININGSESSION_API = '/api/trainingsession/'; // if localhost

@Injectable({
  providedIn: 'root'
})
export class TrainingsessionDataService {

  constructor(private httpClient: HttpClient, private trainingUtils: TrainingUtils) {}

  getAll(): Observable<any> {
    return this.httpClient.get(
      this.getTrainingsessionUrl(),
      this.trainingUtils.getHttpOptions()
    );
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
      this.getTrainingsessionUrl(trainingsession.id),
      this.trainingUtils.getHttpOptions()
    );
  }

  getTrainingsessionUrl(id?: number) {
    if (id) {
      return TRAININGSESSION_API + id;
    }
    return TRAININGSESSION_API;
  }
}
