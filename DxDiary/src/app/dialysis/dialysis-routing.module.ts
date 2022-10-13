import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialysisDashboardComponent } from './components/dialysis-dashboard/dialysis-dashboard.component';
import { DialysisFormComponent } from './components/dialysis-form/dialysis-form.component';
import { DialysisHistoryComponent } from './components/dialysis-history/dialysis-history.component';

const routes: Routes = [
    {
        path: '', component: DialysisDashboardComponent,
        children: [
            {
                path: 'record', component: DialysisFormComponent
              },
              {
                path: 'history', component: DialysisHistoryComponent
              }
        ]
      }      
    ];
    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
      export class DialysisRoutingModule { }