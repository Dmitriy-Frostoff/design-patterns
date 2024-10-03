import ArrayIterator from './ArrayIterator';
import ObjectIterator from './ObjectIterator';

const arrayData = new ArrayIterator(['Audi', 'BMW', 'Tesla', 'Mersedes']);

while (arrayData.hasNext()) {
  console.log(arrayData.next());
}
/*
Audi
BMW
Tesla
Mersedes
 */

const autos = {
  audi: { model: 'Audi', color: 'black', price: '20000' },
  bmw: { model: 'BMW', color: 'white', price: '30000' },
  tesla: { model: 'Tesla', color: 'gray', price: '40000' },
};

const objectData = new ObjectIterator(autos);

while (objectData.hasNext()) {
  console.log(objectData.next());
}
/*
{ model: 'Audi', color: 'black', price: '20000' }
{ model: 'BMW', color: 'white', price: '30000' }
{ model: 'Tesla', color: 'gray', price: '40000' }
*/
