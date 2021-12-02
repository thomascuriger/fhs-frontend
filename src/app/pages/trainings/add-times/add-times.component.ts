import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Training, Trainingsession } from '@app/data/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-times',
  templateUrl: './add-times.component.html',
  styleUrls: ['./add-times.component.scss']
})
export class AddTimesComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  trainingSessions: Trainingsession[] = [];

  chosenTraining: Trainingsession = new Trainingsession();

  constructor(
  ) {}

  ngOnInit(): void {
    const trainingSession = {
      id: 1,
      title: 'Trainingstitel',
      date: new Date(),
      training: new Training()
    }
    this.trainingSessions.push(trainingSession);
  }

}
