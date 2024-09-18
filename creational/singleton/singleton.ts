interface ICount {
  count: number;

  getCount(): number;
  increaseCount(): number;
}

class Counter implements ICount {
  public count: number;

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

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount2.getCount()); // 4
console.log(myCount1.getCount()); // 4
