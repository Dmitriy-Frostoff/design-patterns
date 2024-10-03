import {
  IIterator,
  PrimitiveData,
  PrimitiveDataArray,
  PrimitiveDataObject,
} from './types';

export default class ArrayIterator implements IIterator {
  private index: number;

  private elements: PrimitiveDataArray;

  constructor(el: PrimitiveDataArray) {
    this.elements = el;
    this.index = 0;
  }

  next(): PrimitiveData | PrimitiveDataArray | PrimitiveDataObject {
    const result: PrimitiveData | PrimitiveDataArray | PrimitiveDataObject =
      this.elements[this.index];
    this.index += 1;
    return result;
  }

  hasNext(): boolean {
    return this.index < this.elements.length;
  }
}
