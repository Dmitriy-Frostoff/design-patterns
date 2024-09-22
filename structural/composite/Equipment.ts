export default abstract class Equipment {
  protected price: number = 0;

  protected name: string = '';

  getPrice(): number {
    return this.price || 0;
  }

  getName(): string {
    return this.name;
  }

  setPrice(amount: number): void {
    if (!Number.isFinite(amount)) {
      throw new Error(`not a finite number was given as a price`);
    }

    this.price = amount;
  }

  setName(name: string): void {
    this.name = name;
  }
}
