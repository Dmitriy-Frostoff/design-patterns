export interface IAuto {
  startEngine(engine: ISimpleEngine): void;
}

export interface ISimpleEngine {
  simpleInterface(): void;
}

export interface IComplicatedEngine {
  complicatedInterface(): void;
}
