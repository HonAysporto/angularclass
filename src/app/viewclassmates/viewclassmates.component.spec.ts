import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclassmatesComponent } from './viewclassmates.component';

describe('ViewclassmatesComponent', () => {
  let component: ViewclassmatesComponent;
  let fixture: ComponentFixture<ViewclassmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewclassmatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewclassmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
