export interface IHero {
  id?: number;
  name?: string;
}

export class Hero {
  constructor(
    public id?: number,
    public name?: string
  ) {}
}
