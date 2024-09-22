import Equipment from './Equipment';

export default class Body extends Equipment {
  constructor() {
    super();
    this.setName('body');
    this.setPrice(3000);
  }
}
