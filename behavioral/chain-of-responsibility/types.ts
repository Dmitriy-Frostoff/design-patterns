export interface IAccount {
  pay(price: number): void;
  canPay(price: number): boolean;
  setIncomer(incomer: IAccount | null): void;
  show(): void;
}
