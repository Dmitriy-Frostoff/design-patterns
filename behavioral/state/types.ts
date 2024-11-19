export enum OrderStatuses {
  WaitingForPayment = 'WaitingForPayment',
  Shipping = 'Shipping',
  Delivered = 'Delivered',
}

export interface IOrder {
  getState(): string;

  nextState(): void;
}
