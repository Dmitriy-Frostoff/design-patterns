import Auto from './Auto';

import { IAutoFactory, ModelsType } from './types';

export default class AutoFactory implements IAutoFactory {
  protected models: ModelsType;

  constructor() {
    this.models = {};
  }

  create(name: string): Auto {
    const model = this.models[name];

    if (model) {
      return model;
    }

    console.count('model'); // <-- console counter

    this.models[name] = new Auto(name);
    return this.models[name];
  }

  getModels(): ModelsType {
    return this.models;
  }
}
