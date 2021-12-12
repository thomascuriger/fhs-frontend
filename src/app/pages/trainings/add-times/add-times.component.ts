import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Training, Trainingsession } from '@app/data/models';
import { Router } from '@angular/router';
import { TrainingsessionDataService } from '@app/data/services';

@Component({
  selector: 'app-add-times',
  templateUrl: './add-times.component.html',
  styleUrls: ['./add-times.component.scss']
})
export class AddTimesComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  trainingSessions: Trainingsession[] = [];

  chosenTraining: any;

  constructor(
    private router: Router,
    private trainingsessionService: TrainingsessionDataService
  ) {}

  ngOnInit(): void {
    this.trainingsessionService.getAll().subscribe(data => {
      data.forEach((element: Trainingsession) => {
        this.trainingSessions.push(element);
      });
    });
    this.chosenTraining = this.trainingSessions[0];
  }

  navigateBack() {
    this.router.navigate(['/trainings']);
  }
}
