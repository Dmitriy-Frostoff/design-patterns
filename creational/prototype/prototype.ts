interface ITeslaCar {
  model: string;

  price: number;

  interior: string;

  autopilot: boolean;
  produce(): TeslaCar;
}

class TeslaCar implements ITeslaCar {
  model: string;

  price: number;

  interior: string;

  autopilot: boolean;

  constructor(
    model: string,
    price: number,
    interior: string,
    autopilot: boolean,
  ) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce(): TeslaCar {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

// produce base auto
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

//  cloning of base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// changes for particular auto
car1.interior = 'white';
car1.autopilot = true;

console.log(car1);
// TeslaCar {
//   model: 'S',
//   price: 80000,
//   interior: 'white',
//   autopilot: true
// }
console.log(car2);
// TeslaCar {
//   model: 'S',
//   price: 80000,
//   interior: 'black',
//   autopilot: false
// }
console.log(car3);
// TeslaCar {
//   model: 'S',
//   price: 80000,
//   interior: 'black',
//   autopilot: false
// }
