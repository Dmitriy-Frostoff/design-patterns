import { IAuto, ISimpleEngine } from './types';

export default class Auto implements IAuto {
  startEngine(engine: ISimpleEngine): void {
    engine.simpleInterface();
  }
}
