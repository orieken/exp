import { Injectable } from '@angular/core';
import { ColorService } from './color-service';

@Injectable({
  providedIn: 'root'
})
export class GreenColorService extends ColorService {
  name: string = 'Green Service';

  constructor() {
    super();
  }

}
