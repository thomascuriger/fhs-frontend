import { MitarbeiterDataService } from '../../data/services/mitarbeiter-data.service';
import { Component, OnInit } from '@angular/core';
import { Mitarbeiter } from '@app/data/models';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.scss'],
})


export class PerformancesComponent implements OnInit {


  mitarbeiter: Mitarbeiter[] = [];

  constructor(private mitarbeiterDataService: MitarbeiterDataService) {}

  ngOnInit(): void {
    this.mitarbeiterDataService.getAll().subscribe((mitarbeiter) => {
      this.mitarbeiter = mitarbeiter;
    });
  }
}
