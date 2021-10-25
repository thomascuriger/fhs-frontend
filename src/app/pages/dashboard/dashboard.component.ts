/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/data/training';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  summaryTrainings: Training[] = [];


  ngOnInit(): void {
    let summaryOne = new Training();
    summaryOne.title = "Mittwochsintervall";
    summaryOne.description = "Super Mittwochstraining letzte Woche.";
    this.summaryTrainings.push(summaryOne);
    let summaryTwo = new Training();
    summaryTwo.title = "Samstagsintervall";
    summaryTwo.description = "Am Samstag waren sehr viele Athleten vor Ort";
    this.summaryTrainings.push(summaryTwo);
    let summaryThree = new Training();
    summaryThree.title = "Mittwochsintervall";
    summaryThree.description = "Super Mittwochstraining letzte Woche.";
    this.summaryTrainings.push(summaryThree);

  }
}
