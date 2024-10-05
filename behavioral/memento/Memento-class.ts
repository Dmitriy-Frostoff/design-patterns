import {
  PrimitiveData,
  PrimitiveDataArray,
  PrimitiveDataObject,
} from './types';

export default class Memento {
  private value: PrimitiveData | PrimitiveDataArray | PrimitiveDataObject;

  constructor(value: PrimitiveData | PrimitiveDataArray | PrimitiveDataObject) {
    this.value = value;
  }

  getValue(): PrimitiveData | PrimitiveDataArray | PrimitiveDataObject {
    return this.value;
  }
}
