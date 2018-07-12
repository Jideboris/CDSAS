import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import * as sec from '../../common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  constructor(private router: Router, ) { }

  ngOnInit() {
    let outcome = sec.encrypt('omo')
    console.log(outcome)
    let outcome2 = sec.decrypt(outcome)
    console.log(outcome2)
  }
  login() {
    this.router.navigateByUrl('/addemployees')
  }
  reset() {

  }
}
