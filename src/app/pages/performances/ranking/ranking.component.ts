import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TrainingDataService } from '@app/data/services';

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
  ) { }

  id = 0;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.get();
    });
  }

  get() {
    this.trainingDataService.getTrainingByTrainingsessionId(this.id)
    .subscribe(data => {
      this.trainings = data;
    });
  }

}
