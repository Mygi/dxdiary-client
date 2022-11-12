import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { IObservation } from '../../models/observation';
@Component({
  selector: 'app-observation-form',
  templateUrl: './observation-form.component.html',
  styleUrls: ['./observation-form.component.scss']
})
export class ObservationFormComponent implements OnInit {

  @Output() savedObservation = new EventEmitter<IObservation>();
  systolic: number = 95;
  diastolic: number = 60;
  pulse = 70;
  weight = 82.0;
  o2saturation = 99;
  temperature = 36.2;

  bpOptions: Options = {
    floor: 40,
    ceil: 210,
    step: 1
  };

  pulseOptions: Options = {
    floor: 40,
    ceil: 210,
    step: 1
  };

  weightOptions: Options = {
    floor: 65.0,
    ceil: 90.0,
    step: 0.1
  };

  o2Options: Options = {
    floor: 80.0,
    ceil: 100.0,
    step: 1
  };

  temperatureOptions: Options = {
    floor: 35.0,
    ceil: 42.0,
    step: 0.1
  };

  public showObservationForm = false;
  constructor() { }

  ngOnInit(): void {
  }

  enterObservation() {
    this.showObservationForm = true;
  }
  cancelObservation() {
    this.showObservationForm = false;
  }
  saveObservation() {
    this.savedObservation.emit( {
      systolic: this.systolic,
      diastolic: this.diastolic,
      weight: this.weight,
      oxygenSaturation: this.o2saturation,
      pulse: this.pulse,
      temperature: this.temperature
    })
  }
}
