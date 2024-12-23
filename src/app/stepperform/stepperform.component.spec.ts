import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperformComponent } from './stepperform.component';

describe('StepperformComponent', () => {
  let component: StepperformComponent;
  let fixture: ComponentFixture<StepperformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
