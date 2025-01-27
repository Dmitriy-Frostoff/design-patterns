import TeslaCar from './TeslaCar';

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
