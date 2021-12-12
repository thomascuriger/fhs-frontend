import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Trainingsession } from '@app/data/models';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {}

  addTrainingsessionsplit() {

  }

  save() {
    const trainingsession = new Trainingsession();
  }

}
