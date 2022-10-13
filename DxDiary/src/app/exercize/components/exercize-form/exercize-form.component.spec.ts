import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercizeFormComponent } from './exercize-form.component';

describe('ExercizeFormComponent', () => {
  let component: ExercizeFormComponent;
  let fixture: ComponentFixture<ExercizeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercizeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
