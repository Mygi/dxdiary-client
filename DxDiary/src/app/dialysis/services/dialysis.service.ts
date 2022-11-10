import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DialysisSession } from '../models/dialysis';
import { Observable, map } from 'rxjs';
import { SortDirection} from '@angular/material/sort';
import { DialysisRegime } from '../models/dialysis-regime';
import { DialysisSessionStore } from '../state/dialsysis-state.store';
@Injectable({
  providedIn: 'root'
})
export class DialysisService {

  private dxUrl = "/assets/data/dialysis.json";
  private dxRegimeUrl = "/assets/data/dialysis-regime.json"
  constructor(private _http: HttpClient, private sessionStore: DialysisSessionStore) { }

  /**
   * Should add a better form of filtering!
   * @param startDate 
   * @param sort 
   * @param order 
   * @param page 
   * @param pageSize 
   * @returns 
   */
  public getHistory(startDate: number, sort: string, order: SortDirection, page: number, pageSize: number): Observable<DialysisSession[]> {
    const orderAsNumber = order == "asc" ? 1 : -1;    
    return this._http.get<DialysisSession[]>(this.dxUrl)
                     .pipe(map(x =>      
                      {
                        x.forEach( item => item.dateValue = new Date(Date.parse(item.date)));                                    
                        return x.sort((a,b) => {
                          if(sort in a && sort in b) {
                            return a[sort as keyof DialysisSession] > b[sort as keyof DialysisSession] ? orderAsNumber : 0
                          }
                          return 0;
                        }).slice(page * pageSize, pageSize)
                      }));
  }
  public getRegime(userId: string): Observable<DialysisRegime> {
    return this._http.get<DialysisRegime>(this.dxRegimeUrl)
  }
  //public addSession
  public saveSession(session: DialysisSession): Observable<DialysisSession> {
    return this._http.post<DialysisSession>(this.dxUrl, session);
  }
  public startSession(session: DialysisSession): boolean {
    this.sessionStore.update({
      currentSession: session,
      currentSessionState: "started"
    });
    return true;
  }
}
