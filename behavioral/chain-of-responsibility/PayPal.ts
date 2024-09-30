import Account from './Account';

export default class PayPal extends Account {
  constructor(balance: number) {
    super('PayPal', balance);
  }
}
