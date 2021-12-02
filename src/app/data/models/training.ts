export interface TrainingDto {
  readonly id: number;
  readonly title: string;
}

export class Training {
  id?: number;
  title?: string;

  constructor(dto?: TrainingDto) {
    if (dto) {
      this.id = dto.id;
      this.title = dto.title;
    }
  }
}
