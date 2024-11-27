import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotekeepComponent } from './notekeep.component';

describe('NotekeepComponent', () => {
  let component: NotekeepComponent;
  let fixture: ComponentFixture<NotekeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotekeepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotekeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
