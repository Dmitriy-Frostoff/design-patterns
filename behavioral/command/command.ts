import Engine from './Engine';
import Driver from './Driver';
import OnStartCommand from './OnStartCommand';

// Check engine status
const engine = new Engine();
console.log(engine);
/*
Engine { state: false }
*/

// Start Engine
const onStartCommand = new OnStartCommand(engine);
const driver = new Driver();
driver.execute(onStartCommand);

console.log(engine);
/*
Engine { state: true }
*/
