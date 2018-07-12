import { Component, OnInit } from '@angular/core'
import { Router} from '@angular/router'
import { AdminService } from '../admin.service'
import { Store } from '../../../../node_modules/@ngrx/store'
import { AdminState } from '../store/reducers/admin'
import * as fromActions from '../store/actions/admin'

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent implements OnInit {
  model: any = {}
  constructor(private router: Router,private store: Store<AdminState>) { }

  ngOnInit() {}

  onSubmit() {
    console.log('here-service')
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    this.store.dispatch(new fromActions.SaveAdmminAction(JSON.stringify(this.model)))
  }
  saveadmin() {
    alert('hello')
    this.router.navigateByUrl('/addemployees')
  }
}
