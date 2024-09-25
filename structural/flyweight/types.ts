import Auto from './Auto';

export type ModelsType = Record<string, Auto>;

export interface IAutoFactory {
  create(name: string): Auto;
  getModels(): ModelsType;
}
