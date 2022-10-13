import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugmentationFormComponent } from './augmentation-form.component';

describe('AugmentationFormComponent', () => {
  let component: AugmentationFormComponent;
  let fixture: ComponentFixture<AugmentationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugmentationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AugmentationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
