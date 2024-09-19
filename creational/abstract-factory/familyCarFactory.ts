import I3 from './I3';
import { ICar, ICarFactory } from './interfaces';

export default class FamilyCarFactory implements ICarFactory {
  produce(): ICar {
    return new I3();
  }
}
