import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';
import { AdminState } from '../../admin/store/reducers/admin';
import * as fromActions from '../../admin/store/actions/admin'
import { getLoginInfo } from '../../admin/store/selectors/admin';
import { encrypt } from '../../../app/common';
import { Observable } from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  logininfo$: Observable<any>
  logininfo: any
  message: string = ''
  constructor(private router: Router, private store: Store<AdminState>) { }

  ngOnInit() {

  }

  reset() {

  }
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.onSubmit()
    }
  }
  onSubmit() {
    let encryptedpass = encrypt(this.model.password)
    this.store.dispatch(new fromActions.GetLoginInfo(this.model.username))
    setTimeout(() => this.logininfo$ = this.store.select(getLoginInfo))

    setTimeout(() => this.logininfo$.subscribe(x => {
      this.logininfo = x
      if (this.logininfo[0] !== undefined) {
        this.message = ''
        let info = this.logininfo[0]
        if (info.password === encryptedpass) {
          let role = info.logininfo.role
          localStorage.setItem('role', role)
          localStorage.setItem('isvalid','true')
          switch (role) {
            case 'Superuser':
              this.router.navigateByUrl('/addemployees')
              break
            case 'Admin':
              break
          }
        }
      }
      else {
        localStorage.setItem('isvalid','false')
        this.message = "Username or password is invalid!!!"
      }
    }))
  }
}
