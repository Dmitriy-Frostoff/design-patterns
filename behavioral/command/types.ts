export interface ICommand {
  execute(method?: ICommand): void;
}

export interface IEngine {
  on(): void;

  off(): void;
}
