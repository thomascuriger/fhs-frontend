import { MitarbeiterDataService } from '../../data/services/mitarbeiter-data.service';
import { Component, OnInit } from '@angular/core';
import { Mitarbeiter } from '@app/data/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})


export class DashboardComponent implements OnInit {


  mitarbeiter: Mitarbeiter[] = [];

  constructor(private mitarbeiterDataService: MitarbeiterDataService) {}

  ngOnInit(): void {
    this.mitarbeiterDataService.getAll().subscribe((mitarbeiter) => {
      this.mitarbeiter = mitarbeiter;
    });
  }
}
