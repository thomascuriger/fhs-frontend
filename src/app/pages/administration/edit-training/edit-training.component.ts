import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainingsessionsplit } from '@app/data/models';
import { TrainingsessionDataService } from '@app/data/services';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.scss']
})
export class EditTrainingComponent implements OnInit {
  form: FormGroup;
  id = 0;
  title = '';
  description = '';
  trainingsession: any;
  categoryId = 0;

  constructor(
    private trainingsessiondataService: TrainingsessionDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
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
      this.trainingsession.trainingsessionsplits.sort(
        (a: Trainingsessionsplit, b: Trainingsessionsplit) => a.id - b.id
      )
      this.title = this.trainingsession.title;
      this.description = this.trainingsession.description;
      this.categoryId = this.trainingsession.categoryId;
      this.trainingsession.trainingsessionsplits.forEach((split: { id: number | undefined; distance: number | undefined; breaktime: number | undefined; }) => {
        this.addTrainingsessionsplit(split.id, split.distance, split.breaktime);
      });
    });
  }

  items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  addTrainingsessionsplit(id?: number, distance?: number, breaktime?: number): void {
    let items = this.form.get('items') as FormArray;
    items.push(
      this.formBuilder.group({
        id: id ? id : null,
        distance: distance ? distance : '',
        breaktime: breaktime ? breaktime : ''
      })
    );
  }

  removeTrainingsessionsplit(index: number) {
    let items = this.form.get('items') as FormArray;
    items.removeAt(index);
  }

  update() {
    this.trainingsession.title = this.title;
    this.trainingsession.description = this.description;
    this.trainingsession.trainingsessionsplits = [];
    this.trainingsession.categoryId = this.categoryId;
    this.form.value.items.forEach((element: any) => {
      const split = new Trainingsessionsplit();
      split.id = element.id;
      split.distance = element.distance;
      split.breaktime = element.breaktime;
      this.trainingsession.trainingsessionsplits.push(split);
    });
    this.trainingsessiondataService
      .updateTrainingsession(this.trainingsession)
      .subscribe(data => {});
    this.router.navigate(['/administration']);
  }

  navigateBack() {
    this.router.navigate(['/administration']);
  }
}
