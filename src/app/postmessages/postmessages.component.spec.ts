import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmessagesComponent } from './postmessages.component';

describe('PostmessagesComponent', () => {
  let component: PostmessagesComponent;
  let fixture: ComponentFixture<PostmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
