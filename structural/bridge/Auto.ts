import Model from './Model';
import Color from './Color';

export default abstract class Auto extends Model {
  protected name: string;

  constructor(name: string, color: Color) {
    super(color);
    this.color = color;
    this.name = name;
  }

  paint(): string {
    return `Auto: ${this.name}, Color: ${this.color.get()}`;
  }
}
