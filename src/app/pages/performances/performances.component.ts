import { Router } from '@angular/router';
import { Trainingsession } from './../../data/models/trainingsession';
import { Component, OnInit } from '@angular/core';
import { Training } from '@app/data/models';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.scss']
})
export class PerformancesComponent implements OnInit {
  trainingsessions: Trainingsession[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const trainingSession = {
      id: 1,
      title: 'Training vom 8. Dezember 2021',
      date: new Date()
    };
    this.trainingsessions.push(trainingSession);
  }

  navigateToRanking(id: number) {
    this.router.navigate(['performances/ranking/' + id]);
  }
}
