import BmwProducer from './bmwProducer';

//  Initializing Abstract factory of sport cars
const BmwSportCarsFactory = BmwProducer.produce('sport');

// Car producing (Factory)
const myCarFactoryClass = new BmwSportCarsFactory();
const myCar = myCarFactoryClass.produce();

console.log(myCar.info()); // Z4 is a Sport car!
