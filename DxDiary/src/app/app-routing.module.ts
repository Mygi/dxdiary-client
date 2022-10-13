import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AugmentationFormComponent } from './augmentations/components/augmentation-form/augmentation-form.component';
import { BenchmarkFormComponent } from './benchmark/components/benchmark-form/benchmark-form.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { DialysisDashboardComponent } from './dialysis/components/dialysis-dashboard/dialysis-dashboard.component';
import { DialysisHistoryComponent } from './dialysis/components/dialysis-history/dialysis-history.component';
import { DietFormComponent } from './diet/components/diet-form/diet-form.component';
import { ExercizeFormComponent } from './exercize/components/exercize-form/exercize-form.component';
import { MedicationFormComponent } from './medications/components/medication-form/medication-form.component';
import { ObservationFormComponent } from './observations/components/observation-form/observation-form.component';
import { StrengthFormComponent } from './strength/components/strength-form/strength-form.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'dialysis',
    loadChildren: () => import('./dialysis/dialysis.module').then(m => m.DialysisModule)
  },
  {
    path: 'augment', component: AugmentationFormComponent
  },
  {
    path: 'diet', component: DietFormComponent
  },
  {
    path: 'strength', component: StrengthFormComponent
  },
  {
    path: 'exercize', component: ExercizeFormComponent
  },
  {
    path: 'benchmark', component: BenchmarkFormComponent
  },
  {
    path: 'medication', component: MedicationFormComponent
  },
  {
    path: 'observations', component: ObservationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
