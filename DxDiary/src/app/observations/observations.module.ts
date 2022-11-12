import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservationFormComponent } from './components/observation-form/observation-form.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
    ObservationFormComponent
  ],
  imports: [
    CommonModule,
    NgxSliderModule
  ],
  exports: [ObservationFormComponent]
  
})
export class ObservationsModule { }
