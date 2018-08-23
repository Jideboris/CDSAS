import { Component, OnInit, Input } from '@angular/core'
import { Employee } from '../../model/Employee'
import { AdminService } from '../admin.service'
import { Observable } from 'rxjs'
import { AdminState } from '../../store/reducers/admin'
import { Store } from '@ngrx/store'
import { getEmployees } from '../../store/selectors/admin'
import * as fromActions from '../../store/actions/client'
import * as fromActionsAdmin from '../../store/actions/admin'
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
  model: any = {}
  clientId: string
  regcode: string
  constructor(private store: Store<AdminState>, private router: ActivatedRoute, private adminservice: AdminService) {
    this.isaddemployee = true
    this.employees = []
    this.store.dispatch(new fromActionsAdmin.GetEmployeesAction())
    this.employees$ = this.store.select(getEmployees)
  }
  ngOnInit() {
    this.router.queryParamMap.subscribe(params => {
      this.regcode = params.get('regcode')
      this.clientId = params.get('clientId')
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

    this.model.employees = this.employees
    this.model.regcode = this.regcode
    this.model.clientId = this.clientId

    console.log(this.model)

    this.store.dispatch(new fromActions.SaveClientEmployees(JSON.stringify(this.model)))
  }
  //TODO:save and remove buttons would only appear if add is clicked.
  addemployee() {
    //this has to be deleting old savings and installing new stuffs all the time.
    //validate to ensure the default values are not sent
    this.isaddemployee = false
    this.employees.push({ empid: 'empid', firstname: 'firstname', lastname: 'lastname', email: 'email@yahoo.com'})
  }
}
