import Equipment from './Equipment';

export default class Tools extends Equipment {
  constructor() {
    super();
    this.setName(`Tools`);
    this.setPrice(4000);
  }
}
