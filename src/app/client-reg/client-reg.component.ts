import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AdminState } from '../store/reducers/admin'
import * as fromActions from '../store/actions/admin'
import { getSubscriptions, getRoles, getPositions } from '../store/selectors/admin';
import { Dropdown } from '../model/Adminstrator';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';

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
  emailmodel: any = {}

  constructor(private store: Store<AdminState>, private router: Router) { }

  ngOnInit() {
    this.subscriptions$ = this.store.select(getSubscriptions)
    this.roles$ = this.store.select(getRoles)
    this.positions$ = this.store.select(getPositions)
  }
  onSubmit() {
    this.store.dispatch(new fromActions.SaveClientRegistration(JSON.stringify(this.model)))
    this.router.navigateByUrl('/home')
  }
}
