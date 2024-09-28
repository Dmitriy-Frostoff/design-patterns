import CarAccess from './CarAccess';
import SecuritySystem from './SecuritySystem';

const door = new SecuritySystem(new CarAccess());

door.open('Jack'); // Access denied!
door.open('Ilon'); // Opening car door
door.close(); // Closing the car door
