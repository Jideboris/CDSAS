import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRoute } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate() {
    console.log('AuthGuard#canActivate called')
    let role = localStorage.getItem('role')
    let isvalid = localStorage.getItem('isvalid')
  
    return Boolean(isvalid)
  }
}
