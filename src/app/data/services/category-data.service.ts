import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingUtils } from '@shared/util/training-utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {
  private baseUrl = '/api/category';

  constructor(private httpClient: HttpClient, private trainingUtils: TrainingUtils) {}

  getAll(): Observable<any> {
    return this.httpClient.get(
      this.getCategoryUrl(),
      this.trainingUtils.getHttpOptions()
    );
  }

  getCategoryUrl(id?: number) {
    if (id) {
      return this.baseUrl.concat('/' + id);
    }
    return this.baseUrl;
  }
}
