import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingUtils } from '@shared/util/training-utils';
import { EMPTY, Observable } from 'rxjs';
import { Training } from '../models';

const TRAINING_API = 'http://localhost:8080/api/training/'; // if electron
// const TRAINING_API = '/api/training/'; // if localhost

@Injectable({
  providedIn: 'root'
})
export class TrainingDataService {

  constructor(private httpClient: HttpClient, private trainingUtils: TrainingUtils) {}

  getAll(): Observable<any> {
    return this.httpClient.get(
      this.getTrainingUrl(),
      this.trainingUtils.getHttpOptions()
    );
  }

  getOne(id: number): Observable<Training> {
    return this.httpClient.get<Training>(
      this.getTrainingUrl(id),
      this.trainingUtils.getHttpOptions()
    );
  }

  getTrainingByUserId(userId: number): Observable<any> {
    return this.httpClient.get(
      this.getTrainingUrl() + 'user' + '/' + userId,
      this.trainingUtils.getHttpOptions()
    );
  }

  getTrainingByTrainingsessionId(trainingsessionId: number) {
    return this.httpClient.get(
      this.getTrainingUrl() + 'trainingsession' + '/' + trainingsessionId,
      this.trainingUtils.getHttpOptions()
    );
  }

  createTraining(training: Training): Observable<Training> {
    return this.httpClient.post<Training>(
      this.getTrainingUrl(),
      JSON.stringify(training),
      this.trainingUtils.getHttpOptions()
    );
  }

  updateTraining(training: Training): Observable<Training> {
    return this.httpClient.post<Training>(
      this.getTrainingUrl(),
      training,
      this.trainingUtils.getHttpOptions()
    );
  }

  delete(training: Training): Observable<void> {
    if (!training.id) return EMPTY;
    return this.httpClient.delete<void>(
      this.getTrainingUrl(training.id),
      this.trainingUtils.getHttpOptions()
    );
  }

  getTrainingUrl(id?: number) {
    if (id) {
      return TRAINING_API + id;
    }
    return TRAINING_API;
  }
}
