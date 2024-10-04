import { ICustomer, IOfficialDealer } from './types';

export default class Customer implements ICustomer {
  private name: string;

  private dealerMediator: IOfficialDealer;

  constructor(name: string, dealerMediator: IOfficialDealer) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName(): string {
    return this.name;
  }

  makeOrder(auto: string, info: string): void {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}
