import { Component, OnInit, OnDestroy, Input } from '@angular/core'
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
  @Input() message: string = ''
  model: any = {}
  code: string
  private sub: any;
  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AdminState>) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.code = params['client-code']
      this.model.client = this.code
      //check if the code is still valid and active
      this.router.navigateByUrl('/login')
    })
  }
  onSubmit() {
    let mod = this.model
    if (mod.password === mod.passwordconfirm && this.code !== '') {
      this.store.dispatch(new fromActions.SaveAdmminAction(JSON.stringify(this.model)))
    }
    else {
      this.message = "Please ensure password and comfirmation is the same"
    }
  }
  saveadmin() {
    this.router.navigateByUrl('/addemployees')
  }
}
