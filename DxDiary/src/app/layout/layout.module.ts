import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './components/top-menu/top-menu.component';



@NgModule({
  declarations: [
    TopMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ TopMenuComponent ]
})
export class LayoutModule { }
