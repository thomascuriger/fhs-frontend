import { AuftraegeDataService } from '../../../data/services/auftrag-data.service';
import { KundenDataService } from '../../../data/services/kunden-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auftrag, Kunde } from '@app/data/models';

@Component({
  selector: 'app-edit-times',
  templateUrl: './edit-times.component.html',
  styleUrls: ['./edit-times.component.scss']
})
export class EditTimesComponent implements OnInit {

  id: number = 0;
  kunde?: Kunde;
  auftraege: Auftrag[] = [];

  constructor(
    private route: ActivatedRoute,
    private kundenDataService: KundenDataService,
    private auftraegeService: AuftraegeDataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.get();
    });
  }

  get() {
    this.kundenDataService.getOne(this.id)
      .subscribe(kunde => {
        this.kunde = kunde;
        this.auftraegeService.getAuftraegeByClientId(kunde.kundeId)
          .subscribe(auftraege => {
            this.auftraege = auftraege;
          });
      });

  }

}