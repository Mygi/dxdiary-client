import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenchmarkFormComponent } from './components/benchmark-form/benchmark-form.component';
import { BenchmarkHistoryComponent } from './components/benchmark-history/benchmark-history.component';



@NgModule({
  declarations: [
    BenchmarkFormComponent,
    BenchmarkHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BenchmarkModule { }
