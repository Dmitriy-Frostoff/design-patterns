import { ICar } from './types';

export default class Parktronic implements ICar {
  protected car: ICar;

  constructor(car: ICar) {
    this.car = car;
  }

  getPrice(): number {
    return this.car.getPrice() + 3000;
  }

  getDescription(): string {
    return `${this.car.getDescription()} with parktronic`;
  }
}
