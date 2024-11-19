import OrderStatus from './OrderStatus';
import Delivered from './Delivered';
import { OrderStatuses } from './types';

export default class Shipping extends OrderStatus {
  constructor() {
    super(OrderStatuses.Shipping, new Delivered());
  }
}
