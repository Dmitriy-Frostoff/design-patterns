import { ITeslaCar } from './types';

export default class TeslaCar implements ITeslaCar {
  model: string;

  price: number;

  interior: string;

  autopilot: boolean;

  constructor(
    model: string,
    price: number,
    interior: string,
    autopilot: boolean,
  ) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce(): TeslaCar {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}
