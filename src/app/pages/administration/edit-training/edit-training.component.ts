import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainingsession, Trainingsessionsplit } from '@app/data/models';
import { TrainingsessionDataService } from '@app/data/services';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.scss']
})
export class EditTrainingComponent implements OnInit {

  form?: FormGroup;
  title = '';
  id = 0;
  trainingSession: any;

  constructor(
    private trainingsessiondataService: TrainingsessionDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      title: '',
      description: '',
      items: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.get();
    });
  }

  get() {
    this.trainingsessiondataService.getOne(this.id)
    .subscribe(data => {
      this.trainingSession = data;
    });
  }

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

  update() {
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
