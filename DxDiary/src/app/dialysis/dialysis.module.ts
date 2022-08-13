import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialysisFormComponent } from './components/dialysis-form/dialysis-form.component';
import { DialysisHistoryComponent } from './components/dialysis-history/dialysis-history.component';



@NgModule({
  declarations: [
    DialysisFormComponent,
    DialysisHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DialysisModule { }
