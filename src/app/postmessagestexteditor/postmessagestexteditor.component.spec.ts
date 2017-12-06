import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmessagestexteditorComponent } from './postmessagestexteditor.component';

describe('PostmessagestexteditorComponent', () => {
  let component: PostmessagestexteditorComponent;
  let fixture: ComponentFixture<PostmessagestexteditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostmessagestexteditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmessagestexteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
