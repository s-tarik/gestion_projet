import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancieresComponent } from './financieres.component';

describe('FinancieresComponent', () => {
  let component: FinancieresComponent;
  let fixture: ComponentFixture<FinancieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancieresComponent]
    });
    fixture = TestBed.createComponent(FinancieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
