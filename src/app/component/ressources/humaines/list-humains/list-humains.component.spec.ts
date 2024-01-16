import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHumainsComponent } from './list-humains.component';

describe('ListHumainsComponent', () => {
  let component: ListHumainsComponent;
  let fixture: ComponentFixture<ListHumainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHumainsComponent]
    });
    fixture = TestBed.createComponent(ListHumainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
