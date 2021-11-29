import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuftraegeDataService {
  private baseUrl = '/api/auftraege';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getAuftraegeByClientId(id: number): Observable<any> {
    return this.httpClient.get(this.getKundenAuftraegeUrl(id));
  }

  getKundenAuftraegeUrl(id: number) {
    return this.baseUrl.concat('/kunden').concat('/' + id);
  }

}
