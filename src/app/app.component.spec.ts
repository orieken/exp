import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorDetailComponent } from './color-detail/color-detail.component';
import { RedColorService } from './red-color.service';
import { BlueColorService } from './blue-color.service';
import { GreenColorService } from './green-color.service';
import { NullColorService } from './null-color.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ColorPickerComponent,
        ColorDetailComponent,
      ],
      providers: [
        RedColorService,
        BlueColorService,
        GreenColorService,
        NullColorService,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'exp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('exp');
  });
});
