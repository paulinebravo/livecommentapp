import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventscatalogComponent } from './eventscatalog.component';

describe('EventscatalogComponent', () => {
  let component: EventscatalogComponent;
  let fixture: ComponentFixture<EventscatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventscatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventscatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
