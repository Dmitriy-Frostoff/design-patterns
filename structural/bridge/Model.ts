import Color from './Color';

export default abstract class Model {
  protected color: Color;

  constructor(color: Color) {
    this.color = color;
  }
}
