import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { AdminState } from '../store/reducers/admin'
import * as fromActions from '../store/actions/admin'
import { Observable } from 'rxjs/internal/Observable';
import { Dropdown } from '../model/Adminstrator';
import { encrypt } from '../../../app/common';
import { getClientRegistration, getPositions } from '../store/selectors/admin';

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
  code = ''
  disabledbutton = false
  private clientreg: any
  private sub: any;
  positions$: Observable<Dropdown[]>
  clientreg$: Observable<string>
  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AdminState>) {
    this.positions$ = this.store.select(getPositions)
    this.sub = this.route.params.subscribe(params => {
      this.code = params['regcode']
      setTimeout(() => this.store.dispatch(new fromActions.GetClientRegAction(this.code)))
    })
  }

  ngOnInit() {
    this.clientreg$ = this.store.select(getClientRegistration)
    this.clientreg$.subscribe(reg => {
      if (reg === '' || reg === undefined) {
        return
      }
      this.clientreg = reg
      if (this.clientreg.isvalid) {
        let regs = this.clientreg.items[0]
        if (regs !== undefined && regs.consumed) {
          this.router.navigateByUrl('/login')
        }
        else {
          setTimeout(() => this.setModel(regs))
        }
      }
      else {
        this.router.navigateByUrl('/invalid-code')
      }
    })
  }
  setModel(clientreg) {
    let model = this.model
    if (clientreg !== undefined) {
      model.firstname = clientreg.firstname
      model.lastname = clientreg.lastname
      model.email = clientreg.email
      model.position = clientreg.position
      model.companyname = clientreg.companyname
      model.companyregnumber = clientreg.regnumber
    }
  }
  onSubmit() {
    //TODO:set consumed to true on registration
    const mod = this.model
    if (mod.password === mod.passwordconfirm && this.code !== '') {
      let encryptedpass = encrypt(mod.password)
      this.model.password = encryptedpass
      this.model.passwordconfirm = encryptedpass
      this.model.regcode = this.code
      this.store.dispatch(new fromActions.SaveClientRegistrationForm(JSON.stringify(this.model)))
      this.disabledbutton = true
      // this.router.navigateByUrl('/login')
    }
    else {
      this.message = "Please ensure password and comfirmation is the same"
    }
  }
  saveadmin() {
    this.router.navigateByUrl('/addemployees')
  }
}
