import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogotPasswordComponent } from './frogot-password.component';

describe('FrogotPasswordComponent', () => {
  let component: FrogotPasswordComponent;
  let fixture: ComponentFixture<FrogotPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrogotPasswordComponent]
    });
    fixture = TestBed.createComponent(FrogotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
