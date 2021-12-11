import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, Observable } from 'rxjs';
import { Page, PageDto, Training, TrainingDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrainingDataService {
  private baseUrl = '/api/training';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Page<TrainingDto>> {
    return this.httpClient
      .get<PageDto<TrainingDto>>(this.baseUrl)
      .pipe(map(dto => new Page<Training>(dto, Training)));
  }

  getOne(id: number): Observable<Training> {
    return this.httpClient
      .get<TrainingDto>(this.getTrainingUrl(id))
      .pipe(map(dto => new Training(dto)));
  }

  createTraining(training: Training): Observable<Training> {
    return this.httpClient
      .post<TrainingDto>(this.getTrainingUrl(), training.dto)
      .pipe(map(dto => new Training(dto)));
  }

  updateTraining(training: Training): Observable<Training> {
    return this.httpClient
      .post<TrainingDto>(this.getTrainingUrl(), training.dto)
      .pipe(map(dto => new Training(dto)));
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
}
