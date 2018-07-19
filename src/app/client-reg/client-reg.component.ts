import { Component, OnInit, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { AdminState } from '../admin/store/reducers/admin'
import * as fromActions from '../admin/store/actions/admin'
import { getSubscriptions } from '../admin/store/selectors/admin';
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
  constructor(private store: Store<AdminState>) {
    this.store.dispatch(new fromActions.GetSubscriptionAction())
  }

  ngOnInit() {
    this.subscriptions$ = this.store.select(getSubscriptions)
  }

}
