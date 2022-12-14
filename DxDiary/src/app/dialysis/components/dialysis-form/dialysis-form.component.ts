import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { DialysisService } from '../../services/dialysis.service';
import { first } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { DialysisRegime } from '../../models/dialysis-regime';
import { DialysisSession } from '../../models/dialysis';
import { DialysisSessionQuery } from '../../state/dialysis-state.query';
import { formatDate } from '@angular/common';
import { IObservation } from 'src/app/observations/models/observation';
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
  public regime = new DialysisRegime();
  public regimes: DialysisRegime[] = [];
  public dialysisForm = new FormGroup({
    sessionDate: new FormControl(formatDate(new Date(), 'yyyy-MM-ddThh:mm', 'en-AU')),
    endTime: new FormControl("06:00"),
    notes: new FormControl('')
  });
  public session = new DialysisSession();
  public sessionStarted = false;
  public hasSavedPreObservation = false;  
  constructor(private dxService: DialysisService, private dxQuery: DialysisSessionQuery) { }

  ngOnInit(): void {
    this.dialysisForm.patchValue( {
      sessionDate: formatDate(new Date(), 'yyyy-MM-ddThh:mm', 'en-AU')
    })
    this.dxService.getRegime("").pipe(first()).subscribe( result => {
      this.regime = result.find(x => x.isDefault) ?? new DialysisRegime();
      this.temperature = this.regime.temperature;
      this.bloodFlowRate = this.regime.qb.flow;
      this.duration = this.regime.durationHours;
      this.fluidFlowRate = this.regime.qf.flow;      
      this.regimes = result;
      this.dxQuery.sessionState$.subscribe(result => {
        this.sessionStarted = result == 'started';
        if(this.sessionStarted) {
          this.dxQuery.currentSession$.subscribe(result => {       
            if(result !== undefined) {
              // should copy?!
              this.session.date = result.date;
              this.session.duration_hours = result.duration_hours;
              this.temperature = this.session.temp;
              this.bloodFlowRate = this.session.qb;
              this.duration = this.session.duration_hours;
              this.fluidFlowRate = this.session.qb; 
              if(result.preObservation != undefined){
                this.hasSavedPreObservation = true;
                this.session.preObservation = {...result.preObservation};
              } else {
                this.hasSavedPreObservation = false;
              }
              console.log(this.hasSavedPreObservation);
            }        
          });
        }
      });
    
    });
    
   
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
    this.session.date = this.sessionDate == null ? this.session.date : this.sessionDate.value ?? this.session.date;
    
    // this.session.date = this.sessionDate == null ? this.session.date : this.sessionDate.value?.toISOString() ?? this.session.date;
    this.dxService.startSession(this.session);
  }
  get sessionDate() { return this.dialysisForm.get('sessionDate'); }

  get endTime() { return this.dialysisForm.get('endTime'); }

  get notes() { return this.dialysisForm.get('notes'); }

  setPreObservation(event: IObservation) {
    console.log(event);
    this.session.preObservation = event;
  }
  setPostObservation(event: IObservation) {
    // should patch state
    this.session.postObservation = event;
  }
  setRegime(regimeIdString: string) {
    const regimeId = +regimeIdString;
    const index = this.regimes.findIndex( x => x.regimeId == regimeId);
    if(index == -1) {
      return;
    }
    this.regime = this.regimes[index];
    this.session.regimeId = this.regime.regimeId;
    this.temperature = this.regime.temperature;
    this.bloodFlowRate = this.regime.qb.flow;
    this.duration = this.regime.durationHours;
    this.fluidFlowRate = this.regime.qf.flow;   
  }
  restartSession() {
    this.sessionStarted = false;
    this.hasSavedPreObservation = false;
  }
}
