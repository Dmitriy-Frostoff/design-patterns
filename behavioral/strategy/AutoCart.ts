import { IAutoCart } from './types';

export default class AutoCart implements IAutoCart {
  private discount: (amount: number) => number;

  private amount: number;

  constructor(discount: (amount: number) => number) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout(): number {
    return this.discount(this.amount);
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }
}
