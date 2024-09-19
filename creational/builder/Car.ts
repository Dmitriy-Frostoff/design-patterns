export default class Car {
  public autoPilot: boolean;

  public parktronic: boolean;

  public signaling: boolean;

  public engine: string;

  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.signaling = false;
    this.engine = '';
  }
}
