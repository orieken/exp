import { Component, Injector, Input, OnChanges, OnInit } from '@angular/core';
import { ColorService } from '../color-service';
import { NullColorService } from '../null-color.service';
import { GetColorService } from '../color-service.map';

@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.css']
})
export class ColorDetailComponent implements OnInit, OnChanges {
  service: ColorService = new NullColorService;

  @Input() item: string = 'Red';

  constructor(private injector: Injector) {
  }

  ngOnInit(): void {
    this.getColorService();
  }

  ngOnChanges(): void {
    this.getColorService();
  }

  getColorService() {
    const injectable = GetColorService(this.item);
    this.service = this.injector.get(injectable);
    this.item = this.service.get();
  }
}
