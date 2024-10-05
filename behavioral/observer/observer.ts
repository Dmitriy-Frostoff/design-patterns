import AutoNews from './AutoNews';
import User from './User';

const autoNews = new AutoNews();

autoNews.register(new User('Jack'));
autoNews.register(new User('Max'));

autoNews.setNews('New Tesla price is 40 000');
/**
 * @returns {string}
 * Jack was informed about New Tesla price is 40 000
 * Max was informed about New Tesla price is 40 000
 */
