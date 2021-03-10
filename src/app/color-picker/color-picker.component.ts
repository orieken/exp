import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  name = new FormControl('');
  currentItem: string = 'Null';

  constructor() { }

  ngOnInit(): void {
  }

  pickRed() {
    this.currentItem = 'Red';
    this.name.setValue('Red');
  }

  pickGreen() {
    this.currentItem = 'Green';
    this.name.setValue('Green');
  }

  pickBlue() {
    this.currentItem = 'Blue';
    this.name.setValue('Blue');
  }
}
