import { ICarAccessMethods } from './types';

export default class CarAccess implements ICarAccessMethods {
  open(): void {
    console.log(`Opening car door`);
  }

  close(): void {
    console.log(`Closing the car door`);
  }
}
