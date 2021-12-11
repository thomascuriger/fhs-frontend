export interface TrainingDto {
  readonly id?: number;
  readonly title: string;
  readonly description: string;
  readonly date: Date;
}

export class Training {
  readonly id?: number;
  title: string;
  description: string;
  date: Date;

  constructor(dto: TrainingDto) {
    this.id = dto.id;
    this.title = dto.title;
    this.description = dto.description;
    this.date = dto.date;
  }

  get dto(): TrainingDto {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      date: this.date
    };
  }
}
