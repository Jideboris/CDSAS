import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AdminState } from './store/reducers/admin'
import * as fromActions from './store/actions/admin'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() { }
  title = 'app'
  logstatus = 'Log out'
  constructor(private store: Store<AdminState>, private router: Router, ) {
    this.store.dispatch(new fromActions.GetSubscriptionAction())
  }
  processlogin() {
    this.router.navigateByUrl('/login')
  }
}
