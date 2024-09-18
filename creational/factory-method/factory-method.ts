import BmwFactory from './BmwFactory';

const x5 = BmwFactory.create('X5');
const x6 = BmwFactory.create('X6');

console.log(x5);
// Bmw { model: 'X5', price: 108000, maxSpeed: 300 }
console.log(x6);
// Bmw { model: 'X6', price: 111000, maxSpeed: 320 }
