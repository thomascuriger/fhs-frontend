import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Form } from '@angular/forms';
import { Trainingsession, Trainingsessionsplit } from '@app/data/models';
import { TrainingsessionDataService } from '@app/data/services';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private trainingsessiondataService: TrainingsessionDataService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      title: '',
      items: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {}

  items(): FormArray {
    return this.form?.get("items") as FormArray;
  }

  addTrainingsessionsplit(): void {
    let items = this.form?.get('items') as FormArray;
    items.push(this.formBuilder.group({
      distance: ''
    }))
  }

  removeTrainingsessionsplit(index: number) {
    // TODO
  }

  save() {
    const trainingsession = new Trainingsession();
    console.log(this.form?.value);
    trainingsession.title = this.form?.value.title;
    this.form?.value.items.forEach((element: Trainingsessionsplit) => {
      trainingsession.trainingsessionsplits?.push(element);
    });
    this.trainingsessiondataService.createTrainingsession(trainingsession);
  }
}
