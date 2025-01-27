import { ICount } from './types';

export default class Counter implements ICount {
  private count: number;

  private static instance: Counter | undefined;

  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }

    this.count = 0;
    Counter.instance = this;
  }

  getCount(): number {
    return this.count;
  }

  increaseCount(): number {
    this.count += 1;
    return this.count;
  }
}
