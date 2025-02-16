export interface IConveyer {
  setBody(): void;

  getEngine(): void;

  setEngine(): void;

  getInterior(): void;

  setInterior(): void;

  setExterior(): void;

  setWheels(): void;

  addElectronics(): void;

  paint(): void;
}

export interface IConveyerFacade {
  assembleCar(): void;

  changeEngine(): void;

  changeInterior(): void;
}
