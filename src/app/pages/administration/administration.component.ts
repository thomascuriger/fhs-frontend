import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainingsession } from '@app/data/models';
import { TrainingsessionDataService } from '@app/data/services';
import * as moment from 'moment';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  trainingsessions: Trainingsession[] = [];

  constructor(
    private trainingsessiondataService: TrainingsessionDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.trainingsessiondataService.getAll()
    .subscribe(data => {
      this.trainingsessions = data;
    })
  }

  formatDate(date: Date) {
    return moment(date).format('DD.MM.YYYY');
  }

  editTrainingSession(id: number) {
    this.router.navigate(['administration/edit/' + id])
  }
}
