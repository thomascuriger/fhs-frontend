import { AuftraegeDataService } from '../../data/services/auftrag-data.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Auftrag } from '@app/data/models';

@Component({
  selector: 'app-auftraege',
  templateUrl: './auftraege.component.html',
  styleUrls: ['./auftraege.component.scss']
})
export class AuftraegeComponent implements OnInit {
  auftraege: Auftrag[] = [];
  displayedColumns: string[] = [
    'id',
    'aktiv',
    'bezeichnung',
    'kunde',
    'jira_Project_id',
    'startdatum',
    'enddatum',
    'stunden_Schaetzung_min',
    'stunden_Schaeztung_max',
    'stunden_Schaezung_erwartet',
    'stunden_Vertrag'
  ];

  constructor(private auftraegeService: AuftraegeDataService) {}

  ngOnInit(): void {
    this.auftraegeService.getAll().subscribe(auftraege => {
      this.auftraege = auftraege;
    });
  }

  formatDate(date: Date) {
    return moment(date).format('DD.MM.YYYY');
  }
}
