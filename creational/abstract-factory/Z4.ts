import { ICar } from './types';

export default class Z4 implements ICar {
  info(): string {
    return 'Z4 is a Sport car!';
  }
}
