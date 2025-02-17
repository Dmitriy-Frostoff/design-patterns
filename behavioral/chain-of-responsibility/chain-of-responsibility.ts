import Master from './Master';
import PayPal from './PayPal';
import Qiwi from './Qiwi';

const master = new Master(100);
const paypal = new PayPal(200);
const qiwi = new Qiwi(500);

master.setIncomer(paypal);
paypal.setIncomer(qiwi);

master.show();
// Master {
//   name: 'MasterCard', <-- Master
//   balance: 100,
//   incomer: PayPal {   <-- Incomer: PayPal
//     name: 'PayPal',
//     balance: 200,
//     incomer: Qiwi {   <-- Incomer: Qiwi
//       name: 'Qiwi',
//       balance: 500,
//       incomer: null
//     }
//   }
// }
