import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from '@app/data/models';
import { TrainingDataService } from 'src/app/data/services/training-data.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  id = 0;

  training: any;

  constructor(
    private route: ActivatedRoute,
    private trainingDataService: TrainingDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.trainingDataService.getOne(this.id).subscribe(data => {
      this.training = data;
    });
  }
}
