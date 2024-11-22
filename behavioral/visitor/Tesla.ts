import Auto from './Auto';
import { ICarWithExport } from './types';

export default class Tesla extends Auto implements ICarWithExport {
  info(): string {
    return 'It is a Tesla car!';
  }
}
