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
  form: FormGroup;
  id = 0;
  trainingsession: any;
  categoryId = 0;

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
    this.trainingsessiondataService.getOne(this.id).subscribe(data => {
      this.trainingsession = data;
      this.form.value.title = this.trainingsession.title;
      this.categoryId = this.trainingsession.categoryId;
      console.log(data);
    });
  }

  items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  addTrainingsessionsplit(): void {
    let items = this.form.get('items') as FormArray;
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
    console.log(this.form?.value);
    this.trainingsession.title = this.form?.value.title;
    this.trainingsession.description = this.form?.value.description;
    this.trainingsession.trainingsessionsplits = [];
    this.trainingsession.categoryId = this.categoryId;
    this.form.value.items.forEach((element: any) => {
      const split = new Trainingsessionsplit();
      split.distance = element.distance;
      split.breaktime = element.breaktime;
      this.trainingsession.trainingsessionsplits.push(split);
    });
    console.log(this.trainingsession.trainingsessionsplits)
    this.trainingsessiondataService
      .updateTrainingsession(this.trainingsession)
      .subscribe(data => {});
    this.router.navigate(['/administration']);
  }

  navigateBack() {
    this.router.navigate(['/administration']);
  }
}
