import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbehavioursubjectComponent } from './parentbehavioursubject.component';

describe('ParentbehavioursubjectComponent', () => {
  let component: ParentbehavioursubjectComponent;
  let fixture: ComponentFixture<ParentbehavioursubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentbehavioursubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentbehavioursubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
