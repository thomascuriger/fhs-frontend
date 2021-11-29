import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rechnung } from '@app/data/models';
import { Observable, switchMap } from 'rxjs';
import { RechnungenDataService } from '../../../data/services/rechnung-data.service';

@Component({
  selector: 'app-edit-rechnung',
  templateUrl: './edit-rechnung.component.html',
  styleUrls: ['./edit-rechnung.component.scss']
})
export class EditRechnungComponent {
  form: FormGroup = new FormGroup({});

  rechnung$: Observable<Rechnung>;

  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rechnungenService: RechnungenDataService
  ) {
    this.rechnung$ = this.route.params.pipe(
      switchMap(params => this.rechnungenService.getOne(params.id))
    );
  }

  updateBill(rechnung: Rechnung) {
    this.rechnungenService
      .updateRechnung(rechnung)
      .subscribe(() => this.router.navigate(['/bills']));
  }
}
