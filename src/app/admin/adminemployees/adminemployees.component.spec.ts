import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminemployeesComponent } from './adminemployees.component';

describe('AdminemployeesComponent', () => {
  let component: AdminemployeesComponent;
  let fixture: ComponentFixture<AdminemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
