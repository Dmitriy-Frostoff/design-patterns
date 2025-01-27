import TeslaCar from './TeslaCar';

export interface ITeslaCar {
  model: string;

  price: number;

  interior: string;

  autopilot: boolean;

  produce(): TeslaCar;
}
