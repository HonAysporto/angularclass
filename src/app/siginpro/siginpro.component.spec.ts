import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginproComponent } from './siginpro.component';

describe('SiginproComponent', () => {
  let component: SiginproComponent;
  let fixture: ComponentFixture<SiginproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiginproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiginproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
