/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { Training } from 'src/app/data/training';

@Component({
  selector: 'app-dashboard-summary-card',
  templateUrl: './dashboard-summary-card.component.html',
  styleUrls: ['./dashboard-summary-card.component.scss']
})
export class DashboardSummaryCardComponent implements OnInit {

  constructor() { }
  
  @Input()
  training!: Training
  
  ngOnInit(): void {
  }

}
