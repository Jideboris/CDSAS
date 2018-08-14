import { Component, OnInit, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { AdminState } from '../admin/store/reducers/admin'
import * as fromActions from '../admin/store/actions/admin'
import { getSubscriptions, getRoles, getPositions } from '../admin/store/selectors/admin';
import { Dropdown } from '../admin/model/Adminstrator';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-client-reg',
  templateUrl: './client-reg.component.html',
  styleUrls: ['./client-reg.component.css']
})
export class ClientRegComponent implements OnInit {
  model: any = {}
  subscriptions$: Observable<Dropdown[]>
  roles$: Observable<Dropdown[]>
  positions$: Observable<Dropdown[]>

  constructor(private store: Store<AdminState>) {

  }

  ngOnInit() {
    this.subscriptions$ = this.store.select(getSubscriptions)
    this.roles$ = this.store.select(getRoles)
    this.positions$ = this.store.select(getPositions)
  }
  onSubmit() {
    this.store.dispatch(new fromActions.SaveClientRegistration(JSON.stringify(this.model)))
    alert('Done!!Needs to navigate')
  }
}
