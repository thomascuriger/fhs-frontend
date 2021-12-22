import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TrainingDataService } from '@app/data/services';
import { Training } from '@app/data/models';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  trainings: any = [];

  constructor(
    private route: ActivatedRoute,
    private trainingDataService: TrainingDataService
  ) {}

  id = 0;
  title = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.get();
    });
  }

  get() {
    this.trainingDataService.getTrainingByTrainingsessionId(this.id).subscribe(data => {
      this.trainings = data;
      if (this.trainings) {
        this.title = this.trainings[0].title;
      }
      this.trainings.sort(
        (a: Training, b: Training) => +new Date(b.date) - +new Date(a.date)
      );
    });
  }
}
