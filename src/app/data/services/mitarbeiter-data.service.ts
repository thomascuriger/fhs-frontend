import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MitarbeiterDataService {
  private baseUrl = '/api/mitarbeiter';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.getMitarbeiterUrl());
  }

  deleteMitarbeiter(id: number): Observable<any> {
    return this.httpClient.delete(this.getMitarbeiterUrl(id));
  }

  getMitarbeiterUrl(id?: number) {
    if (id) {
      return this.baseUrl.concat('/' + id);
    }
    return this.baseUrl;
  }

}
