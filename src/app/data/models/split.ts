export interface SplitDto {
  readonly id?: number;
  readonly distance: number;
  readonly time: number;
}

export class Split {
  readonly id?: number;
  distance: number;
  time: number;

  constructor(dto: SplitDto) {
    this.id = dto.id;
    this.distance = dto.distance;
    this.time = dto.time;
  }

  get dto() {
    return {
      id: this.id,
      distance: this.distance,
      time: this.time
    }
  }
}
