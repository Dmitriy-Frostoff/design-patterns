import AutoCart from './AutoCart';
import BaseStrategy from './BaseStrategy';
import PremiumStrategy from './PremiumStrategy';
import PlatinumStrategy from './PlatinumStrategy';

const baseCustomer = new AutoCart(BaseStrategy.countPrice);
const premiumCustomer = new AutoCart(PremiumStrategy.countPrice);
const platinumCustomer = new AutoCart(PlatinumStrategy.countPrice);

baseCustomer.setAmount(50000);
console.log(baseCustomer.checkout()); // 50000

premiumCustomer.setAmount(50000);
console.log(premiumCustomer.checkout()); // 42500

platinumCustomer.setAmount(50000);
console.log(platinumCustomer.checkout()); // 32500
