import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DialysisSession } from '../models/dialysis';
import { Observable, map } from 'rxjs';
import { SortDirection} from '@angular/material/sort';
@Injectable({
  providedIn: 'root'
})
export class DialysisService {

  private dxUrl = "/assets/data/dialysis.json";
  constructor(private _http: HttpClient) { }

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
  //public addSession
}
