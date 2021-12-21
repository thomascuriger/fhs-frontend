import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingDataService } from '@app/data/services';

@Component({
  selector: 'app-edit-times',
  templateUrl: './edit-times.component.html',
  styleUrls: ['./edit-times.component.scss']
})
export class EditTimesComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  id: number = 0;
  training: any;
  comment = '';
  date = new Date();

  constructor(
    private trainingDataService: TrainingDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.get();
    });
  }

  get() {
    this.trainingDataService.getOne(this.id).subscribe(data => {
      this.training = data;
      this.comment = this.training.comment;
      this.date = this.training.date;
    });
  }

  update() {
    this.training.date = this.date;
    this.training.comment = this.comment;
    this.trainingDataService.updateTraining(this.training).subscribe(() => {
      this.navigateBack();
    });
  }

  navigateBack() {
    this.router.navigate(['/trainings']);
  }
}
