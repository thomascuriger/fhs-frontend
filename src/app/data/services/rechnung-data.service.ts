import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RechnungenDataService {
  /* private baseUrl = '/api/rechnungen';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.getRechnungsUrl());
  }

  getOne(id: number): Observable<any> {
    return this.httpClient.get(this.getRechnungsUrl(id));
  }

  createRechnung(rechnung: Rechnung): Observable<any> {
    return this.httpClient.post<Rechnung>(this.getRechnungsUrl(), rechnung.dto);
  }

  updateRechnung(rechnung: Rechnung): Observable<any> {
    return this.httpClient.put<Rechnung>(this.getRechnungsUrl(rechnung.rechnungId), rechnung)
  }

  deleteRechnung(id: number): Observable<any> {
    return this.httpClient.delete(this.getRechnungsUrl(id));
  }

  getRechnungsUrl(id?: number) {
    if (id) {
      return this.baseUrl.concat('/' + id);
    }
    return this.baseUrl;
  } */

}
