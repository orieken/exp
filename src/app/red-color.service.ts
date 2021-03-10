import { Injectable } from '@angular/core';
import { ColorService } from './color-service';

@Injectable({
  providedIn: 'root'
})
export class RedColorService extends ColorService {
  name: string = 'Red Service';

  constructor() {
    super();
  }

}
