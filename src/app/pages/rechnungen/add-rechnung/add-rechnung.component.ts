import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Rechnung } from '@app/data/models';
import { RechnungenDataService } from '../../../data/services/rechnung-data.service';

@Component({
  selector: 'app-add-rechnung',
  templateUrl: './add-rechnung.component.html',
  styleUrls: ['./add-rechnung.component.scss']
})
export class AddRechnungComponent {
  form: FormGroup = new FormGroup({});

  rechnung?: Rechnung;

  constructor(private rechnungenService: RechnungenDataService, private router: Router) {}

  addBill() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.rechnung = new Rechnung({
      auftragId: this.form.get('auftragId')?.value,
      belegNr: this.form.get('belegNr')?.value,
      leistungsperiodeStartdatum: this.form.get('leistungsperiodeStartdatum')?.value,
      leistungsperiodeEnddatum: this.form.get('leistungsperiodeEnddatum')?.value,
      stundenVerrechnet: this.form.get('stundenVerrechnet')?.value,
      stundenNichtVerrechenbar: this.form.get('stundenNichtVerrechenbar')?.value,
      stundenSpaeterVerrechenbar: this.form.get('stundenSpaeterVerrechenbar')?.value,
      rechnungsdatum: this.form.get('rechnungsdatum')?.value,
      bemerkung: this.form.get('bemerkung')?.value,
      kundeId: this.form.get('kundeId')?.value,
      betragExklMwst: this.form.get('betragExklMwst')?.value,
      slaBetriebsLizenz: this.form.get('slaBetriebsLizenz')?.value
    });
    this.rechnungenService.createRechnung(this.rechnung).subscribe(() => {
      this.router.navigate(['/bills']);
    });
  }
}
