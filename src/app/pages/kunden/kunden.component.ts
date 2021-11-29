import { KundenDataService } from '../../data/services/kunden-data.service';
import { Component, OnInit } from '@angular/core';
import { Kunde } from '@app/data/models';

@Component({
  selector: 'app-kunden',
  templateUrl: './kunden.component.html',
  styleUrls: ['./kunden.component.scss']
})
export class KundenComponent implements OnInit {

  kunden: Kunde[] = [];
  displayedColumns: string[] = ['id', 'bezeichnung', 'details'];

  constructor(
    private kundenDataService: KundenDataService
  ) { }

  ngOnInit(): void {
    this.kundenDataService.getAll().subscribe((kunden) => {
      this.kunden = kunden;
    });
  }

}
