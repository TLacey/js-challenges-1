import { IOffer } from './IOffer';

export interface IProduct {
  name: string;
  price: Number;
  offer?: IOffer;
  discounted?: boolean;
}
