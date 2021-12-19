import { Split } from ".";

export interface Training {
  readonly id?: number;
  title: string;
  description: string;
  date: Date;
  userId: string;
  firstName: string;
  lastName: string;
  trainingsessionId: number;
  categoryId: number;
  splits: Split[];
}
