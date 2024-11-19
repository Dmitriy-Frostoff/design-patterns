export default abstract class OrderStatus {
  private name: string;

  private nextStatus: OrderStatus | null;

  constructor(name: string, nextStatus: OrderStatus | null) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  getStatus(): string {
    return this.name;
  }

  getNextStatus(): OrderStatus {
    if (!this.nextStatus) {
      return this;
    }

    return this.nextStatus;
  }
}
