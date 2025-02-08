import { Idriver, ICommand } from './types';

export default class Driver implements Idriver {
  execute(method: ICommand): void {
    if (typeof method !== 'object' || method === null) {
      throw new Error(`${method} must be an object with execute method!`);
    }

    method.execute();
  }
}
