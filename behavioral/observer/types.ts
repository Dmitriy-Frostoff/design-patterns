export interface IUser {
  inform(news: string): void;
  getID(): string;
}

export interface IAutoNews {
  setNews(text: string): void;
  notifyAll(): void;
  register(person: IUser): void;
  unregister(person: IUser): void;
}
