import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialysisHistoryComponent } from './dialysis-history.component';

describe('DialysisHistoryComponent', () => {
  let component: DialysisHistoryComponent;
  let fixture: ComponentFixture<DialysisHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialysisHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialysisHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
