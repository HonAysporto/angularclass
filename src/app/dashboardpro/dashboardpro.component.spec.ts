import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardproComponent } from './dashboardpro.component';

describe('DashboardproComponent', () => {
  let component: DashboardproComponent;
  let fixture: ComponentFixture<DashboardproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
