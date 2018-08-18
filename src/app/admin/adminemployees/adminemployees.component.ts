import { Component, OnInit, Input } from '@angular/core'
import { Employee } from '../../model/Employee'
import { AdminService } from '../admin.service'
import { Observable } from 'rxjs'
import { AdminState } from '../../store/reducers/admin'
import { Store } from '@ngrx/store'
import { getEmployees } from '../../store/selectors/admin'
import * as fromActions from '../../store/actions/admin'

@Component({
  selector: 'app-adminemployees',
  templateUrl: './adminemployees.component.html',
  styleUrls: ['./adminemployees.component.css']
})
export class AdminemployeesComponent implements OnInit {
  @Input() isaddemployee: boolean
  @Input() employees: Employee[]
  employees$: Observable<Employee[]>

  constructor(private store: Store<AdminState>, private adminservice: AdminService) {
    this.isaddemployee = true
    this.employees = []
    this.store.dispatch(new fromActions.GetEmployeesAction())
    this.employees$ = this.store.select(getEmployees)
  }
  ngOnInit() {
  }
  getemployees() {
    this.adminservice.getemployees().subscribe(
      data => this.employees = data)
  }
  removeemployee() {
    this.employees.pop()
  }
  saveemployee() {
    console.log(this.employees)
  }
  addemployee() {
    this.isaddemployee = false
    this.employees.push({ empid: 0, firstname: 'firstname', lastname: 'lastname', email: 'email@yahoo.com' })
  }
}
