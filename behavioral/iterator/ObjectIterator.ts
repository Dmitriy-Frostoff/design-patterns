import {
  IIterator,
  PrimitiveData,
  PrimitiveDataArray,
  PrimitiveDataObject,
} from './types';

export default class ObjectIterator implements IIterator {
  private elements: PrimitiveDataObject;

  private index: number;

  private keys: string[];

  constructor(el: PrimitiveDataObject) {
    this.elements = el;
    this.index = 0;
    this.keys = Object.keys(el);
  }

  next(): PrimitiveData | PrimitiveDataArray | PrimitiveDataObject {
    const result: PrimitiveData | PrimitiveDataArray | PrimitiveDataObject =
      this.elements[this.keys[this.index]];
    this.index += 1;
    return result;
  }

  hasNext(): boolean {
    return this.index < this.keys.length;
  }
}
