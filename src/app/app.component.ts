import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AdminState } from './admin/store/reducers/admin'
import * as fromActions from './admin/store/actions/admin'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  constructor(private store: Store<AdminState>) {
    this.store.dispatch(new fromActions.GetSubscriptionAction())
  }
  logout() {
    alert('het!!!')
  }
}
