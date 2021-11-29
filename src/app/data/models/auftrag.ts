export interface AuftragDto {
  readonly auftragId: number;
  readonly aktiv: number;
  readonly bezeichnung: string;
  readonly kundeId: number;
  readonly JIRA_project_id: number;
  readonly enddatum: string | null;
  readonly startdatum: string;
  readonly stundenSchaetzungMin: number;
  readonly stundenSchaetzungMax: number;
  readonly stundenSchaetzungErwartet: number;
  readonly stundenVertrag: number;
}

export class Auftrag {
  auftragId: number;
  aktiv: number;
  bezeichnung: string;
  kundeId: number;
  JIRA_project_id: number;
  enddatum: Date | null;
  startdatum: Date;
  stundenSchaetzungMin: number;
  stundenSchaetzungMax: number;
  stundenSchaetzungErwartet: number;
  stundenVertrag: number;

  constructor(dto: AuftragDto) {
    this.auftragId = dto.auftragId;
    this.aktiv = dto.aktiv;
    this.bezeichnung = dto.bezeichnung;
    this.kundeId = dto.kundeId;
    this.JIRA_project_id = dto.JIRA_project_id;
    this.enddatum = !dto.enddatum ? null : new Date(dto.enddatum);
    this.startdatum = new Date(dto.startdatum);
    this.stundenSchaetzungMin = dto.stundenSchaetzungMin;
    this.stundenSchaetzungErwartet = dto.stundenSchaetzungErwartet;
    this.stundenSchaetzungMax = dto.stundenSchaetzungMax;
    this.stundenVertrag = dto.stundenVertrag;
  }
}
