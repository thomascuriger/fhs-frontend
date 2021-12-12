export interface TrainingsessionsplitDto {
  readonly id?: number;
  readonly distance: number;
}

export class Trainingsessionsplit {
  readonly id?: number;
  distance: number;

  constructor(dto: TrainingsessionsplitDto) {
    this.id = dto.id;
    this.distance = dto.distance;
  }

  get dto() {
    return {
      id: this.id,
      distance: this.distance
    }
  }
}
