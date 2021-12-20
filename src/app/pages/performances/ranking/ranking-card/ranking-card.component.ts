import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Training } from '@app/data/models';

@Component({
  selector: 'app-ranking-card',
  templateUrl: './ranking-card.component.html',
  styleUrls: ['./ranking-card.component.scss']
})
export class RankingCardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @Input() training?: Training;


  ngOnInit(): void {
  }

  navigateToDetails() {
    this.router.navigate(['performances/performance/' + this.training?.id]);
  }

}
