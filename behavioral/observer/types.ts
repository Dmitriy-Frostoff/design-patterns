import User from './User';

export interface IUser {
  inform(news: string): void;
  getID(): string;
}

export interface IAutoNews {
  setNews(text: string): void;
  notifyAll(): void;
  register(person: User): void;
  unregister(person: User): void;
}
