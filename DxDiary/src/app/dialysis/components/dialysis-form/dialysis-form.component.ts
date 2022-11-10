import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { DialysisService } from '../../services/dialysis.service';
import { first } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { DialysisRegime } from '../../models/dialysis-regime';
import { DialysisSession } from '../../models/dialysis';
import { DialysisSessionQuery } from '../../state/dialysis-state.query';
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
  private regime = new DialysisRegime();
  public dialysisForm = new FormGroup({
    sessionDate: new FormControl(new Date(Date.now())),
    endTime: new FormControl("06:00"),
    notes: new FormControl('')
  });
  private session = new DialysisSession();
  constructor(private dxService: DialysisService, private dxQuery: DialysisSessionQuery) { }

  ngOnInit(): void {
    this.dialysisForm.patchValue( {
      sessionDate: new Date(Date.now())
    })
    console.log(this.dialysisForm)
    this.dxService.getRegime("").pipe(first()).subscribe( result => {
      this.regime = result;
      this.temperature = this.regime.temperature;
      this.bloodFlowRate = this.regime.qb.flow;
      this.duration = this.regime.durationHours;
      this.fluidFlowRate = this.regime.qf.flow;      
      
    });
    this.dxQuery.sessionState$.subscribe(result => {
      console.log(result);
    });
    this.dxQuery.currentSession$.subscribe(result => {
      console.log(result);
    })
  }
  saveSession(): void {
    this.session.arterial_pressure = this.arterialPressure;
    this.session.venous_pressure = this.venousPressure;
    this.session.duration_hours - this.duration;
    this.session.uf_litres = this.ufVolume;
    this.session.avg_tmp = this.transMembranePressure;
    this.session.qb = this.bloodFlowRate;
    this.session.qf = this.fluidFlowRate;
    this.session.temp = this.temperature;
    this.session.regimeId = this.regime.regimeId;
    
    this.session.notes = this.notes == null ? this.session.notes : this.notes.value ?? this.session.notes;
    this.session.end_time = this.endTime == null ? this.session.end_time : this.endTime.value ?? this.session.end_time;
    this.session.dateValue = this.sessionDate == null ? this.session.dateValue : this.sessionDate.value ?? this.session.dateValue;
    this.session.date = this.sessionDate == null ? this.session.date : this.sessionDate.value?.toISOString() ?? this.session.date;
    console.log(this.session);
    // this.dxService.saveSession(this.session).subscribe(result => this.session = result);
  }
  get sessionDate() { return this.dialysisForm.get('sessionDate'); }

  get endTime() { return this.dialysisForm.get('endTime'); }

  get notes() { return this.dialysisForm.get('notes'); }


}
