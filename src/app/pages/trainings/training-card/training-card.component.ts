import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Training } from '@app/data/models';
import * as moment from 'moment';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {
  @Input() training?: Training;

  date = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.date = moment(this.training?.date).format('Do MMMM YYYY');
  }

  navigateToEdit() {
    this.router.navigate(['trainings/edit/' + this.training?.id]);
  }

  navigateToDetails() {
    this.router.navigate(['performances/performance/' + this.training?.id]);
  }
}
