import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSingleComponent } from './answer-single.component';

describe('AnswerSingleComponent', () => {
  let component: AnswerSingleComponent;
  let fixture: ComponentFixture<AnswerSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
