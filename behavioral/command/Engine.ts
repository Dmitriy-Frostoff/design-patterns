import { IEngine } from './types';

export default class Engine implements IEngine {
  private state: boolean;

  constructor() {
    this.state = false;
  }

  on(): void {
    this.state = true;
  }

  off(): void {
    this.state = false;
  }
}
