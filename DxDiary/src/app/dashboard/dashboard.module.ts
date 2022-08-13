import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialysisFormComponent } from './components/dialysis-form/dialysis-form.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    DialysisFormComponent,
    DataEntryComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
