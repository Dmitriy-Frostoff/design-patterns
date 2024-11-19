import Order from './Order';

const myOrder = new Order();

console.log(myOrder.getState()); // 'WaitingForPayment'

myOrder.nextState();
console.log(myOrder.getState()); // 'Shipping'

myOrder.nextState();
console.log(myOrder.getState()); // 'Delivered'
