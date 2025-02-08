export interface Idriver {
  execute(method: ICommand): void;
}

export interface ICommand {
  execute(): void;
}

export interface IEngine {
  on(): void;

  off(): void;
}
