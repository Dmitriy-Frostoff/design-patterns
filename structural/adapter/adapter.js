class Engine2 {
  simpleInterface() {
    console.log('Engine 2.0 - tr-tr-tr');
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log('Engine V8! - wroom wroom!');
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
  }
}

// Engine 2.0
const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine); // Engine 2.0 - tr-tr-tr

// Engine V8 adapter
const myCarTuned = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

myCarTuned.startEngine(engineAdapter); // Engine V8! - wroom wroom!

// Engine V8 without adapter
const myCarTest = new Auto();
const engineWithoutAdapter = new EngineV8();

myCarTest.startEngine(engineWithoutAdapter); // TypeError: engine.simpleInterface is not a function
