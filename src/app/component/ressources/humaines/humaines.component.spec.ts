import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumainesComponent } from './humaines.component';

describe('HumainesComponent', () => {
  let component: HumainesComponent;
  let fixture: ComponentFixture<HumainesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumainesComponent]
    });
    fixture = TestBed.createComponent(HumainesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
