import { IAuto } from './types';

export default abstract class Auto implements IAuto {
  abstract info(): string;

  accept(method: (auto: this) => string): string {
    return method(this);
  }
}
