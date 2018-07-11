import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerMultipleComponent } from './answer-multiple.component';

describe('AnswerMultipleComponent', () => {
  let component: AnswerMultipleComponent;
  let fixture: ComponentFixture<AnswerMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
