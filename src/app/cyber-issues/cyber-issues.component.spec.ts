import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberIssuesComponent } from './cyber-issues.component';

describe('CyberIssuesComponent', () => {
  let component: CyberIssuesComponent;
  let fixture: ComponentFixture<CyberIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyberIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
