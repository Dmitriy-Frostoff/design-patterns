import {
  PrimitiveData,
  PrimitiveDataArray,
  PrimitiveDataObject,
} from './types';

import Memento from './Memento-class';

export default abstract class Creator {
  static save(
    value: PrimitiveData | PrimitiveDataArray | PrimitiveDataObject,
  ): Memento {
    return new Memento(value);
  }

  static restore(
    memento: Memento,
  ): PrimitiveData | PrimitiveDataArray | PrimitiveDataObject {
    return memento.getValue();
  }
}
