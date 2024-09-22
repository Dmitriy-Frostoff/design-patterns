import Car from './Car';
import Engine from './Engine';
import Body from './Body';
import Tools from './Tools';

const myCar = new Car();
myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}$`); // Audi price is 7800$
