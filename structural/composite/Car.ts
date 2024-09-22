import Composite from './Composite_class';

export default class Car extends Composite {
  constructor() {
    super();
    this.setName(`Audi`);
  }
}
