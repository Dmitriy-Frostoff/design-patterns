import Memento from './Memento-class';

export type PrimitiveData =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;

export type PrimitiveDataArray =
  | string[]
  | number[]
  | bigint[]
  | boolean[]
  | symbol[]
  | null[]
  | undefined[]
  | (string | number | bigint | boolean | symbol | null | undefined)[]
  | PrimitiveDataObject[];

export type PrimitiveDataObject = {
  [key: string]: PrimitiveData | PrimitiveDataArray | PrimitiveDataObject;
};

export interface ICaretaker {
  addMemento(memento: Memento): void;

  getMemento(index: number): Memento;
}
