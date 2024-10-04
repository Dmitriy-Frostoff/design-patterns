import OfficialDealer from './OfficialDealer';
import Customer from './Customer';

const mediator = new OfficialDealer();

const yauhen = new Customer('Yauhen', mediator);
const valera = new Customer('Valera', mediator);

yauhen.makeOrder('Tesla', 'With autopilot!');
/*
Order name: Yauhen. Order auto is Tesla
Additional info: With autopilot!
*/
valera.makeOrder('Audi', 'With parktronic!');
/*
Order name: Valera. Order auto is Audi
Additional info: With parktronic!
*/

console.log(mediator.getCustomerList());
/*
[ 'Yauhen', 'Valera' ]
*/
