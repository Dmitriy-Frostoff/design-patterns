import { IAutoCart, DiscountFunctionType } from './types';

export default class AutoCart implements IAutoCart {
  private discount: DiscountFunctionType;

  private amount: number;

  constructor(discount: DiscountFunctionType) {
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
