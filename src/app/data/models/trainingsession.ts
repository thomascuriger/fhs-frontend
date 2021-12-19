import { Trainingsessionsplit } from '.';

export interface Trainingsession {
  readonly id?: number;
  title: string;
  description: string;
  categoryId: number;
  trainingsessionsplits: Trainingsessionsplit[];
}
