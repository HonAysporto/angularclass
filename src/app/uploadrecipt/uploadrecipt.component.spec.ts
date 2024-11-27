import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadreciptComponent } from './uploadrecipt.component';

describe('UploadreciptComponent', () => {
  let component: UploadreciptComponent;
  let fixture: ComponentFixture<UploadreciptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadreciptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadreciptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
