import SportCarFactory from './sportCarFactory';
import FamilyCarFactory from './familyCarFactory';

export default abstract class BmwProducer {
  static produce(
    kind: 'sport' | 'family',
  ): typeof SportCarFactory | typeof FamilyCarFactory {
    if (kind === 'sport') {
      return SportCarFactory;
    }

    if (kind === 'family') {
      return FamilyCarFactory;
    }

    throw new Error(`type ${kind} is not defined`);
  }
}
