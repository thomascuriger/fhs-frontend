import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Split, Training, Trainingsession } from '@app/data/models';
import { Router } from '@angular/router';
import { TrainingDataService, TrainingsessionDataService } from '@app/data/services';
import { TokenStorageService } from '@shared/services/token-storage.service';

@Component({
  selector: 'app-add-times',
  templateUrl: './add-times.component.html',
  styleUrls: ['./add-times.component.scss']
})
export class AddTimesComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  trainingSessions: Trainingsession[] = [];

  comment = '';

  chosenTraining: Trainingsession = {
    title: '',
    description: '',
    categoryId: 0,
    trainingsessionsplits: []
  };

  date: Date = new Date();

  temporarySplits = new Array<number>(100);

  constructor(
    private router: Router,
    private trainingsessionService: TrainingsessionDataService,
    private tokenStorage: TokenStorageService,
    private trainingDataService: TrainingDataService
  ) {}

  ngOnInit(): void {
    this.trainingsessionService.getAll().subscribe(data => {
      data.forEach((element: Trainingsession) => {
        this.trainingSessions.push(element);
      });
    });
    this.chosenTraining = this.trainingSessions[0];
  }

  save() {
    const training: Training = {
      title: this.chosenTraining.title,
      description: this.chosenTraining.description,
      date: this.date,
      userId: this.tokenStorage.getUser().id,
      username: this.tokenStorage.getUser().username,
      trainingsessionId: this.chosenTraining.id ? this.chosenTraining.id : 0,
      categoryId: this.chosenTraining.categoryId,
      splits: []
    };
    let i = 0;
    while (this.temporarySplits[i] > 0) {
      const split = new Split();
      split.distance = this.chosenTraining?.trainingsessionsplits[i].distance;
      split.time = this.temporarySplits[i];
      split.breaktime = this.chosenTraining?.trainingsessionsplits[i].breaktime;
      training.splits.push(split);
      i++;
    }
    this.trainingDataService.createTraining(training).subscribe(data => {
      this.navigateBack();
    });
  }

  navigateBack() {
    this.router.navigate(['/trainings']);
  }
}
