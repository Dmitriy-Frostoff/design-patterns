import Equipment from './Equipment';

export default abstract class Composite extends Equipment {
  protected equipments: Equipment[];

  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment: Equipment): void {
    this.equipments.push(equipment);
  }

  remove(name: string): void {
    if (
      !this.equipments.find(
        (equipment) => equipment.getName().toLowerCase() === name.toLowerCase(),
      )
    ) {
      throw new Error(`there's no ${name} at equipments`);
    }

    this.equipments = this.equipments.filter(
      (equipment) => equipment.getName().toLowerCase() !== name.toLowerCase(),
    );
  }

  getPrice(): number {
    return this.equipments
      .map((elem) => elem.getPrice())
      .reduce((sum, num) => sum + num, 0);
  }
}
