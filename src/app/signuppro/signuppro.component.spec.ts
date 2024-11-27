import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupproComponent } from './signuppro.component';

describe('SignupproComponent', () => {
  let component: SignupproComponent;
  let fixture: ComponentFixture<SignupproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
