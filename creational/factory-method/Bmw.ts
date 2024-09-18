export default class Bmw {
  private model: string;

  private price: number;

  private maxSpeed: number;

  constructor(model: string, price: number, maxSpeed: number) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}
