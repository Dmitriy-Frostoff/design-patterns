import { ICar } from './interfaces';

export default class I3 implements ICar {
  info(): string {
    return 'i3 is a Family car!';
  }
}
