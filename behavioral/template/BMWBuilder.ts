import Builder from './Builder';

export default class BMWBuilder extends Builder {
  addEngine(): void {
    console.log('Add BMW Engine');
  }

  installChassis(): void {
    console.log('Install BMW chassis');
  }

  addElectronic(): void {
    console.log('Add electronic');
  }

  collectAccessories(): void {
    console.log('Collect Accessories');
  }
}
