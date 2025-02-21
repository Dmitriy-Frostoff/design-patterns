export interface IAutoCart {
  checkout(): number;
  setAmount(amount: number): void;
}

export type DiscountFunctionType = (amount: number) => number;
