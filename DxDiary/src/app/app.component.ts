import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DxDiary';
  public expanded = true;
  public menu = [{
    "label":"Dialysis",
    "url":"dialysis"
  },
  {
    "label":"Augment",
    "url":"augment"
  },
  {
    "label":"Diet",
    "url":"diet"
  },
  {
    "label":"Strength",
    "url":"strength"
  },
  {
    "label":"Exercize",
    "url":"exercize"
  },
  {
    "label":"Benchmark",
    "url":"benchmark"
  },
  {
    "label":"Medication",
    "url":"medication"
  },
  {
    "label":"Observations",
    "url":"observations"
  }]
  public constructor(private _router: Router) {}
  public navigate(path:string) {
    this._router.navigateByUrl(path);
  }
}
