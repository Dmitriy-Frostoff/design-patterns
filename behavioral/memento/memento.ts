import Caretaker from './Caretaker';
import Creator from './Creator';

const careTaker = new Caretaker();

careTaker.addMemento(Creator.save('Hello'));
careTaker.addMemento(Creator.save('Hello World'));
careTaker.addMemento(Creator.save('Hello World!!!'));

console.log(Creator.restore(careTaker.getMemento(1)));
/**
 * @returns {string} Hello World
 */
