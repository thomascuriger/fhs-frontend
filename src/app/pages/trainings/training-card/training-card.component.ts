import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
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

  navigateToEdit() {
    this.router.navigate(['trainings/edit/' + this.id]);
  }

  navigateToDetails() {
    this.router.navigate(['performances/performance/' + this.id]);
  }

}
