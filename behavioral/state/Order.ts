import { IOrder } from './types';
import OrderStatus from './OrderStatus';
import WaitingForPayment from './WaitingForPayment';

export default class Order implements IOrder {
  private state: OrderStatus;

  constructor() {
    this.state = new WaitingForPayment();
  }

  getState(): string {
    return this.state.getStatus();
  }

  nextState(): void {
    this.state = this.state.getNextStatus();
  }
}
