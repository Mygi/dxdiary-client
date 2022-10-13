import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkHistoryComponent } from './benchmark-history.component';

describe('BenchmarkHistoryComponent', () => {
  let component: BenchmarkHistoryComponent;
  let fixture: ComponentFixture<BenchmarkHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchmarkHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchmarkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
