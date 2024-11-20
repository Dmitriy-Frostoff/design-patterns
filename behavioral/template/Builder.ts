export default abstract class Builder {
  abstract addEngine(): void;

  abstract installChassis(): void;

  abstract addElectronic(): void;

  abstract collectAccessories(): void;

  build(): void {
    this.addEngine();

    this.installChassis();

    this.addElectronic();

    this.collectAccessories();
  }
}
