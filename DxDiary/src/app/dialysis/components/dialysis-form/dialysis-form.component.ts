import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-dialysis-form',
  templateUrl: './dialysis-form.component.html',
  styleUrls: ['./dialysis-form.component.scss']
})
export class DialysisFormComponent implements OnInit {
  venousPressure: number = -100;
  arterialPressure: number = 100;
  options: Options = {
    floor: -200,
    ceil: 200
  };

  duration: number = 8;
  durationOptions: Options = {
    floor: 1,
    ceil: 10,
    step: 0.25
  };

  ufVolume = 2.1;
  ufOptions: Options = {
    floor: 0.5,
    ceil: 6.0,
    step: 0.1
  };
  
  transMembranePressure = 1;
  tmpOptions: Options = {
    floor: -100,
    ceil: 100,
    step: 1
  };

  bloodFlowRate = 250;
  fluidFlowRate = 300
  flowRateOptions: Options = {
    floor: 50,
    ceil: 800,
    step: 5
  };
  
  temperature = 36.5;
  temperatureOptions: Options = {
    floor: 35,
    ceil: 37.5,
    step: 0.1
  };
  constructor() { }

  ngOnInit(): void {
  }

}
