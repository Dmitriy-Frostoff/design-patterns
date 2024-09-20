import { ICompliatedEngine, ISimpleEngine } from './types';

export default class EngineV8Adapter implements ISimpleEngine {
  private engine: ICompliatedEngine;

  constructor(engine: ICompliatedEngine) {
    this.engine = engine;
  }

  simpleInterface(): void {
    this.engine.complicatedInterface();
  }
}
