import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdashboardnavComponent } from './studentdashboardnav.component';

describe('StudentdashboardnavComponent', () => {
  let component: StudentdashboardnavComponent;
  let fixture: ComponentFixture<StudentdashboardnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentdashboardnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentdashboardnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
