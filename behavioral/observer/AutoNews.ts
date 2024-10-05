import { IAutoNews, IUser } from './types';

export default class AutoNews implements IAutoNews {
  private news: string;

  private subscribers: IUser[];

  constructor() {
    this.news = '';
    this.subscribers = [];
  }

  setNews(text: string): void {
    this.news = text;
    this.notifyAll();
  }

  notifyAll(): void {
    this.subscribers.forEach((subscriber) => subscriber.inform(this.news));
  }

  register(person: IUser): void {
    this.subscribers.push(person);
  }

  unregister(person: IUser): void {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber.getID() !== person.getID(),
    );
  }
}
