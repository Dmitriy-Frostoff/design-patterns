import { IComplicatedEngine, ISimpleEngine } from './types';

export default class EngineV8Adapter implements ISimpleEngine {
  private engine: IComplicatedEngine;

  constructor(engine: IComplicatedEngine) {
    this.engine = engine;
  }

  simpleInterface(): void {
    this.engine.complicatedInterface();
  }
}
