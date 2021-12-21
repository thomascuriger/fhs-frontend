import { Component, OnInit } from '@angular/core';
import { Training } from '@app/data/models';
import { TrainingDataService } from 'src/app/data/services/training-data.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  trainings: Training[] = [];

  constructor(private trainingDataService: TrainingDataService) {}

  ngOnInit(): void {
    this.trainingDataService.getAll().subscribe(data => {
      this.trainings = data;
      this.trainings.sort(
        (a: Training, b: Training) => +new Date(b.date) - +new Date(a.date)
      );
    });
  }

  ngAfterContentInit(): void {
    this.trainingDataService.getAll().subscribe(data => {
      this.trainings = data;
      this.trainings.sort(
        (a: Training, b: Training) => +new Date(b.date) - +new Date(a.date)
      );
    });
  }
}
