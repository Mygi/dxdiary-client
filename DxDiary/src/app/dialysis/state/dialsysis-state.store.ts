import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { DialysisSession } from '../models/dialysis';

export interface DialysisSessionState {
   key: number;
   currentSession?: DialysisSession;
   currentSessionState: string;
}

export function createInitialState(): DialysisSessionState {
  return {
    key: 0,
    currentSessionState: "inactive"
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'dialysisSession' })
export class DialysisSessionStore extends Store<DialysisSessionState> {

  constructor() {
    super(createInitialState());
  }
}