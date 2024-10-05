import { IUser } from './types';

export default class User implements IUser {
  private name: string;

  private static idNumberPart: number = -1;

  private id: string;

  constructor(name: string) {
    this.name = name;
    this.id = User.generateID(this.name);
  }

  private static generateID(name: string): string {
    User.idNumberPart += 1;

    return `${name.toLowerCase()}_${User.idNumberPart}`;
  }

  inform(message: string): void {
    console.log(`${this.name} was informed about ${message}`);
  }

  getID(): string {
    return this.id;
  }
}
