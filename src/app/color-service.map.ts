import { RedColorService } from './red-color.service';
import { GreenColorService } from './green-color.service';
import { BlueColorService } from './blue-color.service';
import { NullColorService } from './null-color.service';

export const ColorServiceMap = new Map([
  ['Red', RedColorService],
  ['Green', GreenColorService],
  ['Blue', BlueColorService],
  ['Null', NullColorService],
]);

export const GetColorService = (c: string) => {
  if (!ColorServiceMap.has(c)) {
    return ColorServiceMap.get('Null');
  }
  return ColorServiceMap.get(c);
};
