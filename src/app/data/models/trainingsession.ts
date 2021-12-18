import { Trainingsessionsplit } from '.';

export interface Trainingsession {
  readonly id?: number;
  title: string;
  trainingsessionsplits: Trainingsessionsplit[];
}
