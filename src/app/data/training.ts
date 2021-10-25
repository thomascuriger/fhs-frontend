export class Training {
  id!: string;
  title!: string;
  description!: string;
  date!: Date;
  series!: Serie[];
}

export class Serie {
  id!: string;
  repetitions!: number;
  splits!: Split[];
  serienpauseafter!: number;
}

export class Split {
  id!: string;
  distance!: number;
  time!: number;
}