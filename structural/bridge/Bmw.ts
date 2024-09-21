import Color from './Color';
import Auto from './Auto';

export default class Bmw extends Auto {
  constructor(color: Color) {
    super('Bmw', color);
  }
}
