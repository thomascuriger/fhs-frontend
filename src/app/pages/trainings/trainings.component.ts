import { Component, OnInit } from '@angular/core';
import { Training } from '@app/data/models';
import { TrainingDataService } from 'src/app/data/services/training-data.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  trainings: Training[] = [];

  constructor(private trainingDataService: TrainingDataService) {}

  ngOnInit(): void {

    /* this.trainings = [
      {
        id: 4,
        title: 'training',
        description: 'Trainingsbeschrieb',
        date: new Date(),
        splits: [
          {
            id: 13,
            distance: 300,
            time: 300
          }
        ]
      },
      {
        id: 4,
        title: 'training',
        description: 'Trainingsbeschrieb',
        date: new Date(),
        splits: [
          {
            id: 13,
            distance: 300,
            time: 300
          }
        ]
      },
      {
        id: 4,
        title: 'training',
        description: 'Trainingsbeschrieb',
        date: new Date(),
        splits: [
          {
            id: 13,
            distance: 300,
            time: 300
          }
        ]
      }
    ] */

    this.trainingDataService.getAll().subscribe(data => {
      console.log(data)
      this.trainings = data;
    });
  }
}
