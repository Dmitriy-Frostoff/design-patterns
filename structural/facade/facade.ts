import Conveyer from './Conveyer';
import ConveyerFacade from './ConveyerFacade';

const conveyer = new ConveyerFacade(new Conveyer());
conveyer.assembleCar();
conveyer.changeEngine();
conveyer.changeInterior();
/*
Body set!
Engine set!
Interier added!
Exterier added!
Wheels set!
Added electronics!
Car painted!
Dismantle Engine!
Engine set!
Interier removed!
Interier added!
*/
