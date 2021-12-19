import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "@shared/services/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class TrainingUtils {

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) { }

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
