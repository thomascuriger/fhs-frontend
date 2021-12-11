export interface PageDto<T> {
  readonly items: Object[];
  readonly total: number;
  readonly count: number;
  readonly _links: Links
}

export class Page<T> {
  items: Object[];
  total: number;
  count: number;
  _links: Links;

  constructor(dto: PageDto<{}>, model: new (arg: any) => T) {
    if(dto) {
      this.items = dto.items;
      this.total = dto.total;
      this.count = dto.count;
      this._links = dto._links;
    }
  }
}

export class Links {
  self: string;
  first: string;
  last: string;
}