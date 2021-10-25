import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardSummaryCardComponent } from './components/dashboard-summary-card/dashboard-summary-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ViewTrainingComponent } from './pages/training/view-training/view-training.component';
import { CreateTrainingComponent } from './pages/training/create-training/create-training.component';
import { AddTimesComponent } from './pages/training/add-times/add-times.component';
import { ViewTimesComponent } from './pages/training/view-times/view-times.component';
import { TrainingComponent } from './pages/training/training.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const mat = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatCardModule,
  MatSelectModule,
  MatListModule
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    DashboardSummaryCardComponent,
    ViewTrainingComponent,
    CreateTrainingComponent,
    AddTimesComponent,
    ViewTimesComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    mat
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
