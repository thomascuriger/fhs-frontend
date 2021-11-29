import { Kunde } from '@app/data/models';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KundenDataService {
  private baseUrl = '/api/kunden';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getOne(id: number): Observable<Kunde> {
    const httpOptions = {};
    return this.httpClient.get<Kunde>(this.getKundeUrl(id), httpOptions);
  }

  createKunde(kunde: Kunde): Observable<any> {
    return this.httpClient.post<Kunde>(`${this.baseUrl}`, { kunde: kunde });
  }

  getKundeUrl(id?: number) {
    if (id) {
      return this.baseUrl.concat('/' + id);
    }
    return this.baseUrl;
  }
}
