import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    /* this.auftraegeService.getAll().subscribe(auftraege => {
      this.auftraege = auftraege;
    }); */
  }

  formatDate(date: Date) {
    return moment(date).format('DD.MM.YYYY');
  }
}
