import { Component, OnInit } from '@angular/core';
import { Training } from '@app/data/models';
import { TokenStorageService } from '@shared/services/token-storage.service';
import { TrainingDataService } from 'src/app/data/services/training-data.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  trainings: Training[] = [];

  constructor(
    private trainingDataService: TrainingDataService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.trainingDataService
      .getTrainingByUserId(this.tokenStorageService.getUser().id)
      .subscribe(data => {
        this.trainings = data;
        this.trainings.sort(
          (a: Training, b: Training) => +new Date(b.date) - +new Date(a.date)
        );
      });
  }

  ngAfterContentInit(): void {
    this.trainingDataService
      .getTrainingByUserId(this.tokenStorageService.getUser().id)
      .subscribe(data => {
        this.trainings = data;
        this.trainings.sort(
          (a: Training, b: Training) => +new Date(b.date) - +new Date(a.date)
        );
      });
  }
}
