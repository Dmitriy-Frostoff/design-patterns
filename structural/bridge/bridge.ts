import Bmw from './Bmw';
import BlackColor from './BlackColor';

// We avoided creation of very specific class:
// const blackBmw = new BlackColorBmw();

// instead
const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint()); // Auto: Bmw, Color: dark-black
