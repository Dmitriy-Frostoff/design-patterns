class Car {
  constructor() {
    this.price = 10000;
    this.model = 'Car';
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = 'Tesla';
  }
}

class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

class Parktronic {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

// Version with Autopilot & Parktronic
const teslaOrder0 = new Tesla();
const teslaOrder0WithAutopilot = new Autopilot(teslaOrder0);
const teslaOrder0WithAutopilotAndParktronic = new Parktronic(
  teslaOrder0WithAutopilot,
);

console.log(
  teslaOrder0WithAutopilotAndParktronic.getPrice(),
  teslaOrder0WithAutopilotAndParktronic.getDescription(),
);
// 33000 Tesla with autopilot with parktronic

// Version with Autopilot only
const teslaOrder1 = new Tesla();

const teslaOrder1WithAutopilot = new Autopilot(teslaOrder1);

console.log(
  teslaOrder1WithAutopilot.getPrice(),
  teslaOrder1WithAutopilot.getDescription(),
);
// 30000 Tesla with autopilot
