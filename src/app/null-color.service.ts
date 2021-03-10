import { Injectable } from '@angular/core';
import { ColorService } from './color-service';

@Injectable({
  providedIn: 'root'
})
export class NullColorService extends ColorService {
  name: string = 'Null Color Service';

  constructor() {
    super();
  }
}
