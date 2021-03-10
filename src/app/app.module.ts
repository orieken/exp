import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorDetailComponent } from './color-detail/color-detail.component';
import { RedColorService } from './red-color.service';
import { BlueColorService } from './blue-color.service';
import { GreenColorService } from './green-color.service';
import { NullColorService } from './null-color.service';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ColorDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
      RedColorService,
      BlueColorService,
      GreenColorService,
      NullColorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
