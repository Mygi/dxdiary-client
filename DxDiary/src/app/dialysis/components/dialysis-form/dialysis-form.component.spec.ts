import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialysisFormComponent } from './dialysis-form.component';

describe('DialysisFormComponent', () => {
  let component: DialysisFormComponent;
  let fixture: ComponentFixture<DialysisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialysisFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialysisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
