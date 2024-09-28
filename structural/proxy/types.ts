export interface ICarAccessMethods {
  open(password?: string): void;
  close(): void;
}
