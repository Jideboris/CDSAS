import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { Employee } from '../../model/Employee'
import { Observable, of, BehaviorSubject } from 'rxjs'
import { ClientState } from '../../store/reducers/admin'
import { Store } from '@ngrx/store'
import * as fromActions from '../../store/actions/client'
import * as frmActions from '../../store/actions/email'
import { ActivatedRoute } from '@angular/router';
import { getClientEmployees } from '../../store/selectors/client';

@Component({
  selector: 'app-adminemployees',
  templateUrl: './adminemployees.component.html',
  styleUrls: ['./adminemployees.component.css']
})
export class AdminemployeesComponent implements OnInit {
  private repertoireSubject
  @Input() isaddemployee: boolean
  employees$: Observable<any> = of([])
  data$: Observable<any> = of([])
  model: any = {}
  clientId: string
  regcode: string
  data: any
  employs = []
  addstore: boolean
  show: boolean

  constructor(private store: Store<ClientState>, private router: ActivatedRoute) {
    this.isaddemployee = true
    this.addstore = false
    this.model = {
      employees: [],
      clientId: '',
      regcode: '',
      role: 'User'
    }
    this.show = false
  }
  //TODO:Publish button
  //TODO:Right panel to add employee

  ngOnInit() {
    this.repertoireSubject = new BehaviorSubject<Employee[]>([])
    this.router.queryParamMap.subscribe(params => {
      this.regcode = params.get('regcode')
      this.clientId = params.get('clientId')
    });
    this.get()
  }
  get() {
    this.store.dispatch(new fromActions.GetClientEmployees(this.regcode))
    setTimeout(() => this.data$ = this.store.select(getClientEmployees))
    setTimeout(() => this.data$.subscribe(x => {
      this.data = x
      if (this.data[0] !== undefined) {
        this.repertoireSubject.next(this.data[0].employees)
        this.employees$ = this.repertoireSubject.asObservable()
      }
    }))
  }
  removerow(item) {
    if (this.employs.length === 0) {
      this.repertoireSubject.subscribe(value => {
        value.map((x) => {
          this.employs.push({ empid: x.empid, firstname: x.firstname, lastname: x.lastname, email: x.email })
        })
      })
    }
    let rem = this.employs.filter(x => x.email !== item.email)
    this.employs = rem
    this.model = {
      regcode: this.regcode,
      clientId: this.clientId,
      employees: rem
    }
    this.employees$ = of(rem)
    this.save(this.model)


  }
  publish() {
    let details = {
      clientId: this.clientId,
      regcode: this.regcode
    }
    setTimeout(() => this.store.dispatch(new frmActions.MessageClientEmployees(JSON.stringify(details))))
  }
  removeemployee() {
    this.isaddemployee = true
    this.show = false
  }
  saveemployee() {
    this.employs.push({ empid: this.model.empid, firstname: this.model.firstname, lastname: this.model.lastname, email: this.model.email })
    if (!this.addstore) {
      this.repertoireSubject.subscribe(value => {
        value.map((x) => {
          this.employs.push({ empid: x.empid, firstname: x.firstname, lastname: x.lastname, email: x.email })
          this.addstore = true
        })
      })
    }
    this.model = {
      regcode: this.regcode,
      clientId: this.clientId,
      employees: this.employs
    }
    this.isaddemployee = true
    this.employees$ = of(this.employs)

    this.save(this.model)
  }
  save(model) {
    setTimeout(() => this.store.dispatch(new fromActions.SaveClientEmployees(JSON.stringify(model))))
    this.show = false
  }
  addemployee() {
    this.remove()
    this.isaddemployee = false
    this.show = true
  }
  remove() {
    this.model.empid = ''
    this.model.firstname = ''
    this.model.lastname = ''
    this.model.email = ''

  }
}
