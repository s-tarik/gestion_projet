import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherProjetComponent } from './afficher-projet.component';

describe('AfficherProjetComponent', () => {
  let component: AfficherProjetComponent;
  let fixture: ComponentFixture<AfficherProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherProjetComponent]
    });
    fixture = TestBed.createComponent(AfficherProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
