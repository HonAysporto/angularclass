import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedresetpasswordComponent } from './proceedresetpassword.component';

describe('ProceedresetpasswordComponent', () => {
  let component: ProceedresetpasswordComponent;
  let fixture: ComponentFixture<ProceedresetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceedresetpasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceedresetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
