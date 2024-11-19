import OrderStatus from './OrderStatus';
import { OrderStatuses } from './types';

export default class Delivered extends OrderStatus {
  constructor() {
    super(OrderStatuses.Delivered, null);
  }
}
