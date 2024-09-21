import Color from './Color';
import Auto from './Auto';

export default class Audi extends Auto {
  constructor(color: Color) {
    super('Audi', color);
  }
}
