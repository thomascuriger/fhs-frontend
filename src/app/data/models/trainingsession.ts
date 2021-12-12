import { Trainingsessionsplit } from '.';

export interface TrainingsessionDto {
  readonly id?: number;
  readonly title?: string;
  readonly trainingsessionsplits?: Trainingsessionsplit[];
}

export class Trainingsession {
  readonly id?: number;
  title?: string;
  trainingsessionsplits?: Trainingsessionsplit[];

  constructor(dto?: TrainingsessionDto) {
      if (dto) {
        this.id = dto.id;
        this.title = dto.title;
        this.trainingsessionsplits = dto.trainingsessionsplits;
      }
  }

  get dto(): TrainingsessionDto {
    return {
      id: this.id,
      title: this.title,
      trainingsessionsplits: this.trainingsessionsplits
    };
  }
}
