import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { Employee } from '../../model/Employee'
import { Observable, of } from 'rxjs'
import { ClientState } from '../../store/reducers/admin'
import { Store } from '@ngrx/store'
import * as fromActions from '../../store/actions/client'
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { getClientEmployees } from '../../store/selectors/client';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adminemployees',
  templateUrl: './adminemployees.component.html',
  styleUrls: ['./adminemployees.component.css']
})
export class AdminemployeesComponent implements OnInit {

  @Input() isaddemployee: boolean
  // @Input() employees: Employee[]
  employees$: Observable<any> = of([])
  data$: Observable<any> = of([])
  model: any = {}
  clientId: string
  regcode: string
  data: any
  initialemployees: any
  employs: Employee[] = []
  empid: string = ''
  firstname: string = ''
  lastname: string = ''
  email: string = ''
  constructor(private store: Store<ClientState>, private router: ActivatedRoute) {
    this.isaddemployee = true
    this.initialemployees = []
    this.employs = []
    this.model = {
      employees: [],
      clientId: '',
      regcode: ''
    }
  }


  ngOnInit() {
    this.router.queryParamMap.subscribe(params => {
      this.regcode = params.get('regcode')
      this.clientId = params.get('clientId')
    });
    this.store.dispatch(new fromActions.GetClientEmployees(this.regcode))
    setTimeout(() => this.data$ = this.store.select(getClientEmployees))
    setTimeout(() => this.data$.subscribe(x => {
      this.data = x
      if (this.data[0] !== undefined) {
        this.initialemployees = this.data[0].employees
        this.employees$ = of(this.initialemployees)
      }
    }))
  }

  removeemployee() {
    this.isaddemployee = true
  }
  saveemployee() {
    let employ = { empid: this.model.empid, firstname: this.model.firstname, lastname: this.model.lastname, email: this.model.email }
    this.employs.push(employ)
    this.model = {
      regcode: this.regcode,
      clientId: this.clientId,
      employees: this.employs.concat(this.initialemployees)
    }
    this.store.dispatch(new fromActions.SaveClientEmployees(JSON.stringify(this.model)))
    this.isaddemployee = true
    this.employees$ = of(this.model.employees)
  }
   
  addemployee() {
    this.remove()
    this.isaddemployee = false
  }
  remove(){
    this.model.empid = ''
    this.model.firstname = ''
    this.model.lastname = ''
    this.model.email = '' 
  }
}
