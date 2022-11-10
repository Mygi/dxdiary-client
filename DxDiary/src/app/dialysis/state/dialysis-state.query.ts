import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { DialysisSessionState, DialysisSessionStore } from './dialsysis-state.store';

@Injectable({ providedIn: 'root' })
export class DialysisSessionQuery extends Query<DialysisSessionState> {
    sessionState$ = this.select('currentSessionState');
    currentSession$ = this.select('currentSession');
    constructor(store: DialysisSessionStore) {    
        super(store);
    }

}