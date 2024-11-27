import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbehavioursubjectComponent } from './childbehavioursubject.component';

describe('ChildbehavioursubjectComponent', () => {
  let component: ChildbehavioursubjectComponent;
  let fixture: ComponentFixture<ChildbehavioursubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildbehavioursubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildbehavioursubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
