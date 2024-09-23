import Tesla from './Tesla';
import Autopilot from './Autopilot';
import Parktronic from './Parktronic';

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
