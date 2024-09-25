import { IConveyer } from './types';

export default class Conveyer implements IConveyer {
  setBody(): void {
    console.log(`Body set!`);
  }

  getEngine(): void {
    console.log(`Dismantle Engine!`);
  }

  setEngine(): void {
    console.log(`Engine set!`);
  }

  getInterior(): void {
    console.log(`Interior removed!`);
  }

  setInterior(): void {
    console.log(`Interior added!`);
  }

  setExterior(): void {
    console.log(`Exterior added!`);
  }

  setWheels(): void {
    console.log(`Wheels set!`);
  }

  addElectronics(): void {
    console.log(`Added electronics!`);
  }

  paint(): void {
    console.log(`Car painted!`);
  }
}
