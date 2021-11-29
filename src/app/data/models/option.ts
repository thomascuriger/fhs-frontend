export interface OptionDto {
  readonly value: any;
  readonly label: string;
}

export class Option {
  value: any;
  label: string;

  constructor(dto: Option) {
    this.value = dto.value;
    this.label = dto.label;
  }
}
