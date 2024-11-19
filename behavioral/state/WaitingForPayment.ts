import OrderStatus from './OrderStatus';
import Shipping from './Shipping';
import { OrderStatuses } from './types';

export default class WaitingForPayment extends OrderStatus {
  constructor() {
    super(OrderStatuses.WaitingForPayment, new Shipping());
  }
}
