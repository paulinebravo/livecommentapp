import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsaddComponent } from './eventsadd.component';

describe('EventsaddComponent', () => {
  let component: EventsaddComponent;
  let fixture: ComponentFixture<EventsaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
