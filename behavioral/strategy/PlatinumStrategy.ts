export default abstract class PlatinumStrategy {
  static countPrice(amount: number): number {
    return amount * 0.65;
  }
}
