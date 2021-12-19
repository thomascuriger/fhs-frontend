import { Router } from '@angular/router';
import { Trainingsession } from './../../data/models/trainingsession';
import { Component, OnInit } from '@angular/core';
import { Training } from '@app/data/models';
import * as moment from 'moment';
import { TrainingsessionDataService } from '@app/data/services';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.scss']
})
export class PerformancesComponent implements OnInit {
  trainingsessions: Trainingsession[] = [];

  constructor(private router: Router,
    private trainingsessiondataService: TrainingsessionDataService) {}

  ngOnInit(): void {
    this.trainingsessiondataService.getAll()
    .subscribe(data => {
      this.trainingsessions = data;
    })
  }

  formatDate(date: Date) {
    return moment(date).format('DD.MM.YYYY');
  }

  navigateToRanking(id: number) {
    this.router.navigate(['performances/ranking/' + id]);
  }

}
