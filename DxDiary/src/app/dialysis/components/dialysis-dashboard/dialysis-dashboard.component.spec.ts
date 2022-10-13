import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialysisDashboardComponent } from './dialysis-dashboard.component';

describe('DialysisDashboardComponent', () => {
  let component: DialysisDashboardComponent;
  let fixture: ComponentFixture<DialysisDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialysisDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialysisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
