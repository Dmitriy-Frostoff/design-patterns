export default abstract class PremiumStrategy {
  static countPrice(amount: number): number {
    return amount * 0.85;
  }
}
