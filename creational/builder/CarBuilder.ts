import Car from './Car';

export default class CarBuilder {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  addAutoPilot(autoPilot: boolean): CarBuilder {
    this.car.autoPilot = autoPilot;
    return this;
  }

  addParktronic(parktronic: boolean): CarBuilder {
    this.car.parktronic = parktronic;
    return this;
  }

  addSignaling(signaling: boolean): CarBuilder {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine: string): CarBuilder {
    this.car.engine = engine;
    return this;
  }

  build(): Car {
    return this.car;
  }
}
