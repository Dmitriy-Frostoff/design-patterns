import { ICarAccessMethods } from './types';

export default class SecuritySystem implements ICarAccessMethods {
  private door: ICarAccessMethods;

  constructor(door: ICarAccessMethods) {
    this.door = door;
  }

  open(password: string): void {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log(`Access denied!`);
    }
  }

  private authenticate(password: string): boolean {
    return password === 'Ilon';
  }

  close(): void {
    this.door.close();
  }
}
