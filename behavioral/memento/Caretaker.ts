import Memento from './Memento-class';
import { ICaretaker } from './types';

export default class Caretaker implements ICaretaker {
  private mementos: Memento[];

  constructor() {
    this.mementos = [];
  }

  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  getMemento(index: number): Memento {
    return this.mementos[index];
  }
}
