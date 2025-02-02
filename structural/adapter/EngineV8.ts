import { IComplicatedEngine } from './types';

export default class EngineV8 implements IComplicatedEngine {
  complicatedInterface(): void {
    console.log('Engine V8! - wroom wroom!');
  }
}
