export interface KundeDto {
  kundeId: number;
  bezeichnung: string;
}

export class Kunde {
  kundeId: number;
  bezeichnung: string;

  constructor(dto: KundeDto) {
    this.kundeId = dto.kundeId;
    this.bezeichnung = dto.bezeichnung;
  }
}
