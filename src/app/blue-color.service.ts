import { Injectable } from '@angular/core';
import { ColorService } from './color-service';

@Injectable({
  providedIn: 'root'
})
export class BlueColorService extends ColorService {
  name: string = 'Blue Service';

  constructor() {
    super();
  }

}
