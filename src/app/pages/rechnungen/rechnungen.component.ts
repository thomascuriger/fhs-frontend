import { Component, OnInit } from '@angular/core';
import { Rechnung } from '@app/data/models';
import { RechnungenDataService } from '@app/data/services';
import { DialogService } from '@app/services';
import * as moment from 'moment';

@Component({
  selector: 'app-rechnungen',
  templateUrl: './rechnungen.component.html',
  styleUrls: ['./rechnungen.component.scss']
})
export class RechnungenComponent implements OnInit {
  rechnungen: Rechnung[] = [];
  amount = 0;
  displayedColumns: string[] = [
    'id',
    'orderId',
    'remark',
    'performancePeriodStartDate',
    'performancePeriodEndDate',
    'hoursCharged',
    'amount',
    'clientId',
    'icons'
  ];

  constructor(
    private rechnungenDataService: RechnungenDataService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.rechnungenDataService.getAll().subscribe(rechnungen => {
      this.rechnungen = rechnungen;
    });
  }

  formatDate(date: Date) {
    return moment(date).format('DD.MM.YYYY');
  }

  deleteBill(id: any, i: number) {
    this.dialogService
      .openDeleteConfirmationDialog()
      .subscribe(confirmation =>
        confirmation
          ? this.rechnungenDataService.deleteRechnung(id).subscribe(response => {
            window.location.reload();
          })
          : null
      );
  }
}
