import Auto from './Auto';
import { ICarWithExport } from './types';

export default class BMW extends Auto implements ICarWithExport {
  info(): string {
    return 'It is a BMW car!';
  }
}
