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

  public constructor(private _router: Router) {}
  public navigate(path:string) {
    this._router.navigateByUrl(path);
  }
}
