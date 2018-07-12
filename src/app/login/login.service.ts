import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { of, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<boolean> {
    return this.http.post('https://localhost/login', JSON.stringify({ username, password }), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    }).pipe(map((response: Response) => {
      // login successful if there's a jwt token in the response
      const token = response.json() && response.json()
      if (token) {
        // set token property
        //  this.token = token;

        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify({ username, token }));

        // return true to indicate successful login
        return true
      } else {
        // return false to indicate failed login
        return false
      }
    }))
  }
}
