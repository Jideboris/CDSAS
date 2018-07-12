import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Store } from '../../../../node_modules/@ngrx/store'
import { AdminState } from '../store/reducers/admin'
import * as fromActions from '../store/actions/admin'

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent implements OnInit, OnDestroy {
  ngOnDestroy() {
    this.sub.unsubscribe()
  }
  model: any = {}
  code: string
  private sub: any;
  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AdminState>) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.code = params['client-code']
      this.model.client = this.code
    })
  }
  onSubmit() {
    this.store.dispatch(new fromActions.SaveAdmminAction(JSON.stringify(this.model)))
  }
  saveadmin() {
    this.router.navigateByUrl('/addemployees')
  }
}
