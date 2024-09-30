import Account from './Account';

export default class Qiwi extends Account {
  constructor(balance: number) {
    super('Qiwi', balance);
  }
}
