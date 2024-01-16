import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriellesComponent } from './materielles.component';

describe('MateriellesComponent', () => {
  let component: MateriellesComponent;
  let fixture: ComponentFixture<MateriellesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriellesComponent]
    });
    fixture = TestBed.createComponent(MateriellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
