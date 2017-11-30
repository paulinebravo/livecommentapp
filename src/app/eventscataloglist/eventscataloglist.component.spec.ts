import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventscataloglistComponent } from './eventscataloglist.component';

describe('EventscataloglistComponent', () => {
  let component: EventscataloglistComponent;
  let fixture: ComponentFixture<EventscataloglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventscataloglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventscataloglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
