import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielleListComponent } from './materielle-list.component';

describe('MaterielleListComponent', () => {
  let component: MaterielleListComponent;
  let fixture: ComponentFixture<MaterielleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterielleListComponent]
    });
    fixture = TestBed.createComponent(MaterielleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
