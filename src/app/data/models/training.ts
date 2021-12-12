import { Split, SplitDto } from './index';

export interface TrainingDto {
  readonly id?: number;
  readonly title: string;
  readonly description: string;
  readonly date: Date;
  readonly splits: Split[];
}

export class Training {
  readonly id?: number;
  title: string;
  description: string;
  date: Date;
  splits: Split[];

  constructor(dto: TrainingDto) {
    this.id = dto.id;
    this.title = dto.title;
    this.description = dto.description;
    this.date = dto.date;
    this.splits = dto.splits;
  }

  get dto(): TrainingDto {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      date: this.date,
      splits: this.splits
    };
  }
}
