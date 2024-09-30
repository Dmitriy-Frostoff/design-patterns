import { IAccount } from './types';

export default abstract class Account implements IAccount {
  protected name: string;

  protected balance: number;

  protected incomer: IAccount | null = null;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  pay(orderPrice: number): void {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer !== null) {
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice);
    } else {
      console.log('Unfortunately, not enough money');
    }
  }

  canPay(price: number): boolean {
    return this.balance >= price;
  }

  setIncomer(incomer: IAccount | null): void {
    this.incomer = incomer;
  }

  show(): void {
    console.log(this);
  }
}
