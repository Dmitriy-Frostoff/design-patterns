import Bmw from './Bmw';

export default abstract class BmwFactory {
  public static create(type: string): Bmw {
    if (type === 'X5') return new Bmw(type, 108000, 300);
    if (type === 'X6') return new Bmw(type, 111000, 320);
    throw new Error(`type ${type} is not defined`);
  }
}
