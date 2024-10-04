export interface IOfficialDealer {
  orderAuto(customer: ICustomer, auto: string, info: string): void;
  addToCustomersList(customer: string): void;
  getCustomerList(): string[];
}

export interface ICustomer {
  getName(): string;
  makeOrder(auto: string, info: string): void;
}
