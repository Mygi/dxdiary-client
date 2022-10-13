import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkFormComponent } from './benchmark-form.component';

describe('BenchmarkFormComponent', () => {
  let component: BenchmarkFormComponent;
  let fixture: ComponentFixture<BenchmarkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchmarkFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchmarkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
