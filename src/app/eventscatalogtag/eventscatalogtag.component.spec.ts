import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventscatalogtagComponent } from './eventscatalogtag.component';

describe('EventscatalogtagComponent', () => {
  let component: EventscatalogtagComponent;
  let fixture: ComponentFixture<EventscatalogtagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventscatalogtagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventscatalogtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
