import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'id_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authBasePath = 'auth';
  private token = '';
  private persistent = false;

  /* private features: Feature[] = [];
  private systemRoles: SystemRole[] = []; */

  constructor(
    private httpClient: HttpClient
  ) {
    const localToken = localStorage.getItem(TOKEN_KEY);
    const sessionToken = sessionStorage.getItem(TOKEN_KEY);
    if (localToken) {
      this.setToken(localToken);
      this.persistent = true;
    } else if (sessionToken) {
      this.setToken(sessionToken);
    }
  }

  isLoggedIn(): boolean {
    return tokenNotExpired(null, this.token);
  }

  login(credentials): Observable<any> {
    return this.httpClient.post(this.getAuthRestUrl(this.authBasePath), credentials);
  }

  refreshToken(): void {
    this.httpClient.authGet(this.getAuthRestUrl(this.refreshBasePath), null).subscribe(
      data => this.authSuccess(data.token, this.persistent),
      err => this.logger.error('Error refresh token', err)
    );
  }

  logout(): void {
    const username = this.getUsername();
    this.token = '';

    // Remove from all storages
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_KEY);

    this.logger.info('Logged out user.' + username);
  }

  authSuccess(token: string, persistent: boolean): void {
    if (persistent) {
      localStorage.setItem(TOKEN_KEY, token);
      this.persistent = true;
    } else {
      sessionStorage.setItem(TOKEN_KEY, token);
    }
    this.setToken(token);
  }

  isAdmin(): boolean {
    return this.hasSystemRole(SystemRole.ROLE_ADMIN);
  }

  hasSystemRole(systemRole: SystemRole): boolean {
    return this.isLoggedIn() && this.systemRoles.indexOf(systemRole) !== -1;
  }

  private setToken(token) {
    if (token) {
      this.reset();
      this.token = token;
      this.resolveFeatures(token);
    }
  }

  public getUsername() {
    if (this.token) {
      const jwtToken = this.jwtHelper.decodeToken(this.token);
      return jwtToken.sub;
    }
    return '';
  }

  private getAuthRestUrl(path: string): string {
    return environment.baseUrl.concat(path);
  }
}
