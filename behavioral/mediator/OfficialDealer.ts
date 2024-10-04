import { ICustomer, IOfficialDealer } from './types';

export default class OfficialDealer implements IOfficialDealer {
  private customers: string[];

  constructor() {
    this.customers = [];
  }

  orderAuto(customer: ICustomer, auto: string, info: string): void {
    const name: string = customer.getName();
    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomersList(name);
  }

  addToCustomersList(name: string): void {
    this.customers.push(name);
  }

  getCustomerList(): string[] {
    return this.customers;
  }
}
