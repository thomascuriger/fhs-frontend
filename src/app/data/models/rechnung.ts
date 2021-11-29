export interface RechnungDto {
  readonly rechnungId?: number;
  readonly auftragId: number;
  readonly belegNr: number;
  readonly leistungsperiodeStartdatum: Date;
  readonly leistungsperiodeEnddatum: Date;
  readonly stundenVerrechnet: number;
  readonly stundenNichtVerrechenbar: number;
  readonly stundenSpaeterVerrechenbar: number;
  readonly rechnungsdatum: Date;
  readonly bemerkung: string;
  readonly kundeId: number;
  readonly betragExklMwst: number;
  readonly slaBetriebsLizenz?: boolean;
}

export class Rechnung {
  rechnungId?: number;
  auftragId: number;
  belegNr: number;
  leistungsperiodeStartdatum: Date;
  leistungsperiodeEnddatum: Date;
  stundenVerrechnet: number;
  stundenNichtVerrechenbar: number;
  stundenSpaeterVerrechenbar: number;
  rechnungsdatum: Date;
  bemerkung: string;
  kundeId: number;
  betragExklMwst: number;
  slaBetriebsLizenz?: boolean;

  constructor(dto: RechnungDto) {
    this.rechnungId = dto.rechnungId;
    this.auftragId = dto.auftragId;
    this.belegNr = dto.belegNr;
    this.leistungsperiodeStartdatum = dto.leistungsperiodeStartdatum;
    this.leistungsperiodeEnddatum = dto.leistungsperiodeEnddatum;
    this.stundenVerrechnet = dto.stundenVerrechnet;
    this.stundenNichtVerrechenbar = dto.stundenNichtVerrechenbar;
    this.stundenSpaeterVerrechenbar = dto.stundenSpaeterVerrechenbar;
    this.rechnungsdatum = dto.rechnungsdatum;
    this.bemerkung = dto.bemerkung;
    this.kundeId = dto.kundeId;
    this.betragExklMwst = dto.betragExklMwst;
    this.slaBetriebsLizenz = dto.slaBetriebsLizenz;
  }

  get dto(): RechnungDto {
    return {
      rechnungId: this.rechnungId,
      auftragId: this.auftragId,
      belegNr: this.belegNr,
      leistungsperiodeStartdatum: this.leistungsperiodeStartdatum,
      leistungsperiodeEnddatum: this.leistungsperiodeEnddatum,
      stundenVerrechnet: this.stundenVerrechnet,
      stundenNichtVerrechenbar: this.stundenNichtVerrechenbar,
      stundenSpaeterVerrechenbar: this.stundenSpaeterVerrechenbar,
      rechnungsdatum: this.rechnungsdatum,
      bemerkung: this.bemerkung,
      kundeId: this.kundeId,
      betragExklMwst: this.betragExklMwst,
      slaBetriebsLizenz: this.slaBetriebsLizenz
    };
  }
}
