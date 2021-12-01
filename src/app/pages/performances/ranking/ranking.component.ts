import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  id = 0;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.get();
    });
  }

  get() {

  }

}
