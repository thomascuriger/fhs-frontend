export interface MitarbeiterDto {
  readonly mitarbeiterId: number;
  readonly username: string;
  readonly kuerzel: string;
  readonly name: string;
  readonly strasse: string;
  readonly plz: string;
  readonly ort: string;
  readonly ahvNr: string;
  readonly geburtsdatum: Date;
  readonly eintritt: Date;
  readonly austritt: Date;
  readonly geschlecht: string;
  readonly aktuellesPensum: number;
  readonly kontoinformationen: string;
}

export class Mitarbeiter {
  mitarbeiterId: number;
  username: string;
  kuerzel: string;
  name: string;
  strasse: string;
  plz: string;
  ort: string;
  ahvNr: string;
  geburtsdatum: Date;
  eintritt: Date;
  austritt: Date;
  geschlecht: string;
  aktuellesPensum: number;
  kontoinformationen: string;

  constructor(dto: MitarbeiterDto) {
    this.mitarbeiterId = dto.mitarbeiterId;
    this.username = dto.username;
    this.kuerzel = dto.kuerzel;
    this.name = dto.name;
    this.strasse = dto.strasse;
    this.plz = dto.plz;
    this.ort = dto.ort;
    this.ahvNr = dto.ahvNr;
    this.geburtsdatum = dto.geburtsdatum;
    this.eintritt = dto.eintritt;
    this.austritt = dto.austritt;
    this.geschlecht = dto.geschlecht;
    this.aktuellesPensum = dto.aktuellesPensum;
    this.kontoinformationen = dto.kontoinformationen;
  }
}
