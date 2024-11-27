import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TazerComponent } from './tazer.component';

describe('TazerComponent', () => {
  let component: TazerComponent;
  let fixture: ComponentFixture<TazerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TazerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
