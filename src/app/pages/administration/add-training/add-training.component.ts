import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Trainingsession, Trainingsessionsplit } from '@app/data/models';
import { TrainingsessionDataService } from '@app/data/services';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  form?: FormGroup;
  title = '';

  constructor(
    private trainingsessiondataService: TrainingsessionDataService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      title: '',
      description: '',
      items: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {}

  items(): FormArray {
    return this.form?.get('items') as FormArray;
  }

  addTrainingsessionsplit(): void {
    let items = this.form?.get('items') as FormArray;
    items.push(
      this.formBuilder.group({
        distance: '',
        breaktime: ''
      })
    );
  }

  removeTrainingsessionsplit(index: number) {
    // TODO
  }

  save() {
    const trainingsession: Trainingsession = {
      title: '',
      description: '',
      categoryId: 0,
      trainingsessionsplits: []
    };
    console.log(this.form?.value);
    trainingsession.title = this.form?.value.title;
    trainingsession.description = this.form?.value.description;
    trainingsession.trainingsessionsplits = [];
    this.form?.value.items.forEach((element: any) => {
      const split = new Trainingsessionsplit();
      split.distance = element.distance;
      split.breaktime = element.breaktime;
      trainingsession.trainingsessionsplits?.push(split);
    });
    this.trainingsessiondataService
      .createTrainingsession(trainingsession)
      .subscribe(data => {});
    console.log(trainingsession);
    this.router.navigate(['/administration']);
  }
}
