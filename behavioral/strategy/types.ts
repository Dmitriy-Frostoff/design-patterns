export interface IAutoCart {
  amount: number;
  checkout(): number;
  setAmount(amount: number): void;
}
