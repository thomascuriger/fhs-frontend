import { Component, OnInit } from '@angular/core';
import { Mitarbeiter } from '@app/data/models';
import { DialogService } from '@app/services';
import { MitarbeiterDataService } from 'src/app/data/services/mitarbeiter-data.service';

@Component({
  selector: 'app-mitarbeiter',
  templateUrl: './mitarbeiter.component.html',
  styleUrls: ['./mitarbeiter.component.scss']
})
export class MitarbeiterComponent implements OnInit {
  mitarbeiter: Mitarbeiter[] = [];
  displayedColumns: string[] = ['id', 'name', 'aktuellesPensum', 'username', 'ahvNr', 'icons'];

  constructor(
    private mitarbeiterDataService: MitarbeiterDataService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.mitarbeiterDataService.getAll().subscribe(mitarbeiter => {
      mitarbeiter.sort((a: Mitarbeiter, b: Mitarbeiter) =>
        a.aktuellesPensum > b.aktuellesPensum
          ? -1
          : a.aktuellesPensum < b.aktuellesPensum
          ? 1
          : 0
      );
      this.mitarbeiter = mitarbeiter;
    });
  }

  deleteStaffMember(id: any, i: number) {
    this.dialogService.openDeleteConfirmationDialog().subscribe(confirmation =>
      confirmation
        ? this.mitarbeiterDataService.deleteMitarbeiter(id).subscribe(response => {
            window.location.reload();
          })
        : null
    );
  }
}
