export interface IAuto {
  accept(method: (auto: this) => string): string;
}

export interface ICarWithInfo extends IAuto {
  info: () => string;
}

export interface ICarWithExport extends ICarWithInfo {
  export?: () => string;
}
