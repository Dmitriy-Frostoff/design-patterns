import Builder from './Builder';

export default class TeslaBuilder extends Builder {
  addEngine(): void {
    console.log('Add Electronic Engine');
  }

  installChassis(): void {
    console.log('Install Tesla chassis');
  }

  addElectronic(): void {
    console.log('Add special electronic');
  }

  collectAccessories(): void {
    console.log('Collect Accessories');
  }
}
