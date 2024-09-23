import { ICar } from './types';

export default class Autopilot implements ICar {
  protected car: ICar;

  constructor(car: ICar) {
    this.car = car;
  }

  getPrice(): number {
    return this.car.getPrice() + 5000;
  }

  getDescription(): string {
    return `${this.car.getDescription()} with autopilot`;
  }
}
