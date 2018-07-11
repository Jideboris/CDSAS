import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerWriteComponent } from './answer-write.component';

describe('AnswerWriteComponent', () => {
  let component: AnswerWriteComponent;
  let fixture: ComponentFixture<AnswerWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
