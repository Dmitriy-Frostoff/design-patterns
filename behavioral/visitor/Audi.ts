import Auto from './Auto';
import { ICarWithExport } from './types';

export default class Audi extends Auto implements ICarWithExport {
  info(): string {
    return 'It is an Audi car!';
  }
}
