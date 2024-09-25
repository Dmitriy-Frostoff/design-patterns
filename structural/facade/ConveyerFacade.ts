import { IConveyer } from './types';

export default class ConveyerFacade {
  protected car: IConveyer;

  constructor(car: IConveyer) {
    this.car = car;
  }

  assembleCar(): void {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }

  changeEngine(): void {
    this.car.getEngine();
    this.car.setEngine();
  }

  changeInterior(): void {
    this.car.getInterior();
    this.car.setInterior();
  }
}
