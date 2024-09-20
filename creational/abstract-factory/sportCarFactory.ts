import Z4 from './Z4';
import { ICar, ICarFactory } from './types';

export default class SportCarFactory implements ICarFactory {
  produce(): ICar {
    return new Z4();
  }
}
