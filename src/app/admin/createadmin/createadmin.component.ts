import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { AdminState } from '../store/reducers/admin'
import * as fromActions from '../store/actions/admin'
import { Observable } from 'rxjs/internal/Observable';
import { Dropdown } from '../model/Adminstrator';
import { getRoles, getPositions } from '../store/selectors/admin';

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
  positions$: Observable<Dropdown[]>
  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AdminState>) { }

  ngOnInit() {
    this.positions$ = this.store.select(getPositions)
    this.sub = this.route.params.subscribe(params => {
      this.code = params['regcode']
      console.log(this.code)
      this.model.client = this.code
      //check if the code is still valid and active
      //this.router.navigateByUrl('/login')
    })
  }
  onSubmit() {
    const mod = this.model
    if (mod.password === mod.passwordconfirm && this.code !== '') {
      //  let encryptedpass = secured.encrypt(mod.password)
      // this.model.password = encryptedpass
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
