import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credentials } from '@shared/data/user';
import { AuthService } from '@shared/services/auth.service';

/* import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUserService } from '../../../admin/services/admin-user.service';
import { Feature } from '../../data/security';
import { Language } from '../../data/settings';
import { Credentials, User } from '../../data/user';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { SettingsService } from '../../services/settings.service'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('userName') textarea?: ElementRef;

  constructor(
    private authService: AuthService,
    /* private userService: AdminUserService,
    private settingsService: SettingsService,
    private notificationService: NotificationService, */
    private router: Router,
    private route: ActivatedRoute
  ) { }

  /* login(username: string, password: string, remember: boolean) {
    this.authService.login(<Credentials>{ username, password }).subscribe(
      data => {
        this.notificationService.clear();
        this.authService.authSuccess(data.token, remember);
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.notificationService.errorGrowlSticky('username or password are invalid', 'Login failed');
        console.log('Error login', err);
      }
    );
  } */


  ngOnInit() {
  }

  ngAfterViewInit() {
    /* this.textarea.nativeElement.focus(); */
  }

}
