import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasschildComponent } from './classchild.component';

describe('ClasschildComponent', () => {
  let component: ClasschildComponent;
  let fixture: ComponentFixture<ClasschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasschildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
