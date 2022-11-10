import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialysisFormComponent } from './components/dialysis-form/dialysis-form.component';
import { DialysisHistoryComponent } from './components/dialysis-history/dialysis-history.component';
import {MatTableModule} from '@angular/material/table';

import { DialysisDashboardComponent } from './components/dialysis-dashboard/dialysis-dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialysisRoutingModule } from './dialysis-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DialysisService } from './services/dialysis.service';
import { MatSortModule } from '@angular/material/sort';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ReactiveFormsModule } from '@angular/forms';
import { DialysisSessionQuery } from './state/dialysis-state.query';
import { DialysisSessionStore } from './state/dialsysis-state.store';

@NgModule({
  declarations: [
    DialysisFormComponent,
    DialysisHistoryComponent,
    DialysisDashboardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    DialysisRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    NgxSliderModule,
    ReactiveFormsModule
  ],
  providers: [
    DialysisService,
    DialysisSessionQuery,
    DialysisSessionStore
  ]
})
export class DialysisModule { }
