class Auto {
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return 'It is a Tesla car!';
  }
}

class Bmw extends Auto {
  info() {
    return 'It is a BMW car!';
  }
}

class Audi extends Auto {
  info() {
    return 'It is an Audi car!';
  }
}

function exportVisitor(auto) {
  if (auto instanceof Tesla) {
    auto.export = `Exported data: ${auto.info()}`;
    console.log(auto.export);
  }
  if (auto instanceof Bmw) {
    auto.export = `Exported data: ${auto.info()}`;
    console.log(auto.export);
  }
  if (auto instanceof Audi) {
    auto.export = `Exported data: ${auto.info()}`;
    console.log(auto.export);
  }
}

const tesla = new Tesla();
const bmw = new Bmw();

tesla.accept(exportVisitor);
// Exported data: It is a Tesla car!

bmw.accept(exportVisitor);
// Exported data: It is a BMW car!
