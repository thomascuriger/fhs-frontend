import { Split } from ".";

export interface Training {
  readonly id?: number;
  title: string;
  description: string;
  date: Date;
  userId: string;
  username: string;
  trainingsessionId: number;
  categoryId: number;
  splits: Split[];
}
