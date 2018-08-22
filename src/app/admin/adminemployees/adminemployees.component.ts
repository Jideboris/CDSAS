import { Component, OnInit, Input } from '@angular/core'
import { Employee } from '../../model/Employee'
import { AdminService } from '../admin.service'
import { Observable } from 'rxjs'
import { AdminState } from '../../store/reducers/admin'
import { Store } from '@ngrx/store'
import { getEmployees } from '../../store/selectors/admin'
import * as fromActions from '../../store/actions/admin'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminemployees',
  templateUrl: './adminemployees.component.html',
  styleUrls: ['./adminemployees.component.css']
})
export class AdminemployeesComponent implements OnInit {
  @Input() isaddemployee: boolean
  @Input() employees: Employee[]
  employees$: Observable<Employee[]>

  constructor(private store: Store<AdminState>, private router: ActivatedRoute, private adminservice: AdminService) {
    this.isaddemployee = true
    this.employees = []
    this.store.dispatch(new fromActions.GetEmployeesAction())
    this.employees$ = this.store.select(getEmployees)
  }
  ngOnInit() {
    this.router.queryParamMap.subscribe(params => {
      let regcode = params.get('regcode')
      let clientId = params.get('clientId')
      console.log(clientId)
      console.log(regcode)
      console.log(params)
    });
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
  //TODO:save and remove buttons would only appear if add is clicked.
  addemployee() {
    //this has to be deleting old savings and installing new stuffs all the time.
    this.isaddemployee = false
    this.employees.push({ empid: 0, firstname: 'firstname', lastname: 'lastname', email: 'email@yahoo.com', regcode: '', clientId: '' })
  }
}
