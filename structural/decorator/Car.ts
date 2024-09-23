import { ICar } from './types';

export default abstract class Car implements ICar {
  protected price: number;

  protected model: string;

  constructor(price: number = 10000, model: string = 'Car') {
    this.price = price;
    this.model = model;
  }

  getPrice(): number {
    return this.price;
  }

  getDescription(): string {
    return this.model;
  }
}
