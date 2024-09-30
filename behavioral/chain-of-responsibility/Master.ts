import Account from './Account';

export default class Master extends Account {
  constructor(balance: number) {
    super('Master Card', balance);
  }
}
