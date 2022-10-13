import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Subject, takeUntil, of as observableOf } from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { DialysisSession } from '../../models/dialysis';
import { DialysisService } from '../../services/dialysis.service';

@Component({
  selector: 'app-dialysis-history',
  templateUrl: './dialysis-history.component.html',
  styleUrls: ['./dialysis-history.component.scss']
})
export class DialysisHistoryComponent implements AfterViewInit, OnDestroy  {

  private subscription$ = new Subject<void>();
  public history: DialysisSession[] = [];
  public columnsToDisplay = ['dateValue', 'duration_hours', 'qf', 'temp', 'venous_pressure','arterial_pressure','uf_litres', 'avg_tmp'];
  public resultsLength = 0;
  public isLoadingResults = true;
  public isRateLimitReached = false;
  // ViewChild must be set to optional as it is instantiated in the template
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dxService: DialysisService) { }
  

  
  ngAfterViewInit() {
    var one_month = 1000 * 60 * 60 * 24 * 30;
    var history = Date.now() - one_month;
    // If the user changes the sort order, reset back to the first page.
    console.log(this.sort);
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        takeUntil(this.subscription$),
        switchMap(() => {
          this.isLoadingResults = true;
          return this._dxService.getHistory(
            history, 
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize).pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;
          if (data === null) {
            return [];
          }
          
          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.

          this.resultsLength = data.length;
          return data;
        }),
      )
      .subscribe(data => (this.history = data));
  }
  ngOnDestroy(): void {
    if(this.subscription$ !== undefined) {
      this.subscription$.next();
      this.subscription$.complete();
    }
  }

}
