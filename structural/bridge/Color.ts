export default abstract class Color {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  get(): string {
    return this.type;
  }
}
