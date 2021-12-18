import { Split } from ".";

export class Training {
  readonly id?: number;
  title: string;
  description: string;
  date: Date;
  splits: Split[];
}
