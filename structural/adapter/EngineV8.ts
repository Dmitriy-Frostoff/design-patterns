import { ICompliatedEngine } from './types';

export default class EngineV8 implements ICompliatedEngine {
  complicatedInterface(): void {
    console.log('Engine V8! - wroom wroom!');
  }
}
