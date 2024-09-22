import Equipment from './Equipment';

export default class Engine extends Equipment {
  constructor() {
    super();
    this.setName('engine');
    this.setPrice(800);
  }
}
