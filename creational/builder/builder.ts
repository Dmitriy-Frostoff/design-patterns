import CarBuilder from './CarBuilder';

const myCar = new CarBuilder()
  .addAutoPilot(true)
  .addParktronic(true)
  .updateEngine('V8')
  .build();

console.log(myCar);
// Car {
//   autoPilot: true,
//   parktronic: true,
//   signaling: false,
//   engine: 'V8'
// }
