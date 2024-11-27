import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagereceiptComponent } from './managereceipt.component';

describe('ManagereceiptComponent', () => {
  let component: ManagereceiptComponent;
  let fixture: ComponentFixture<ManagereceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagereceiptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagereceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
