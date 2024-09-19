export interface ICar {
  info(): string;
}

export interface ICarFactory {
  produce(): ICar;
}
