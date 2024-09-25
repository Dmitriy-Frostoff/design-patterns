import AutoFactory from './AutoFactory';
import Auto from './Auto';

const factory: AutoFactory = new AutoFactory();

const bmw: Auto = factory.create('BMW'); // model: 1
const audi: Auto = factory.create('Audi'); // model: 2
const tesla: Auto = factory.create('Tesla'); // model: 3
const blackTesla: Auto = factory.create('Tesla'); // Tesla already exist, return it

console.log(bmw); // Auto { model: 'BMW' }
console.log(audi); // Auto { model: 'Audi' }
console.log(tesla); // Auto { model: 'Tesla' }
console.log(blackTesla); // Auto { model: 'Tesla' }

console.log(factory.getModels());
/*
{
  BMW: Auto { model: 'BMW' },
  Audi: Auto { model: 'Audi' },
  Tesla: Auto { model: 'Tesla' }
}
*/
