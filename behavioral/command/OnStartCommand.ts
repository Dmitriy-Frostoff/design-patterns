import { ICommand, IEngine } from './types';

export default class OnStartCommand implements ICommand {
  private engine: IEngine;

  constructor(engine: IEngine) {
    this.engine = engine;
  }

  execute(): void {
    this.engine.on();
  }
}
