import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-times',
  templateUrl: './edit-times.component.html',
  styleUrls: ['./edit-times.component.scss']
})
export class EditTimesComponent implements OnInit {

  id: number = 0;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // get id from training
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.get();
    });
  }

  get() {
    // get training from id

    /* this.kundenDataService.getOne(this.id)
      .subscribe(kunde => {
        this.kunde = kunde;
        this.auftraegeService.getAuftraegeByClientId(kunde.kundeId)
          .subscribe(auftraege => {
            this.auftraege = auftraege;
          });
      }); */

  }

}
