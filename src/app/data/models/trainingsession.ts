import { Training } from '.';

export interface TrainingsessionDto {
  readonly id: number;
  readonly title: string;
  readonly date: Date;
  readonly training: Training;
}

export class Trainingsession {
  id?: number;
  title?: string;
  date?: Date;
  training?: Training;

  constructor(dto?: TrainingsessionDto) {
    if (dto) {
      this.id = dto.id;
      this.title = dto.title;
      this.date = dto.date;
      this.training = dto.training;
    }
  }
}
