import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TimeComponent } from './time/time.component';
import { DateComponent } from './date/date.component';



@NgModule({
  declarations: [
    SliderComponent,
    TextAreaComponent,
    TimeComponent,
    DateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
