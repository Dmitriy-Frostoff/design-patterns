class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor(name) {
    this.models = {};
  }

  create(name) {
    const model = this.models[name];
    if (model) return model;

    console.count('model'); // <-- console counter

    this.models[name] = new Auto(name);
    return this.models[name];
  }

  getModels() {
    return this.models;
  }
}

const factory = new AutoFactory();

const bmw = factory.create('BMW'); // model: 1
const audi = factory.create('Audi'); // model: 2
const tesla = factory.create('Tesla'); // model: 3
const blackTesla = factory.create('Tesla'); // Tesla already exist, return it

console.log(bmw); // Auto { model: 'BMW' }
console.log(audi); // Auto { model: 'Audi' }
console.log(tesla); // Auto { model: 'Tesla' }
console.log(blackTesla); // Auto { model: 'Tesla' }

console.log(factory.getModels());
/*
{
  BMW: Auto { model: 'BMW' },
  Audi: Auto { model: 'Audi' },
  Tesla: Auto { model: 'Tesla' }
}
*/
