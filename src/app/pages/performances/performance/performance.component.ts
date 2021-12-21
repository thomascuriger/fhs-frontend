import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { TrainingDataService } from 'src/app/data/services/training-data.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  displayedColumns: string[] = ['index', 'time', 'distance', 'breaktime'];

  id = 0;

  date = '';

  training: any;

  constructor(
    private route: ActivatedRoute,
    private trainingDataService: TrainingDataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.trainingDataService.getOne(this.id).subscribe(data => {
      this.training = data;
      this.date = moment(this.training?.date).format('Do MMMM YYYY');
    });
  }

  navigateBack() {
    this.location.back();
  }
}
