export interface IHero {
  id?: number;
  name?: string;
  email?: string;
}

export class Hero {
  constructor(
    public id?: number,
    public name?: string,
    public email?: string
  ) {}
}
