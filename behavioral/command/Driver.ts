import { ICommand } from './types';

export default class Driver implements ICommand {
  execute(method: ICommand): void {
    method.execute();
  }
}
