import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TokenStorageService } from '@shared/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  param = { value: 'world' };
  events: string[] = [];
  opened = false;

  constructor(
    translate: TranslateService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('de');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('de');
  }
  title = 'fhs-frontend';
  showFiller = true;

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login'])
    window.location.reload();
  }

  isLoggedIn() {
    return this.tokenStorageService.getToken();
  }

  isAdmin() {
    return this.tokenStorageService.isAdmin();
  }
}
