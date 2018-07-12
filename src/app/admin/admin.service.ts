import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { Employee } from './model/Employee'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  public getemployees(): Observable<Employee[]> {
    let fakeUsers = [{ empid: 1, firstname: 'Dhiraj', lastname: 'Ray', email: 'dhiraj@gmail.com' },
    { empid: 1, firstname: 'Tom', lastname: 'Jac', email: 'Tom@gmail.com' },
    { empid: 1, firstname: 'Hary', lastname: 'Pan', email: 'hary@gmail.com' },
    { empid: 1, firstname: 'praks', lastname: 'pb', email: 'praks@gmail.com' },
    ];
    return of<Employee[]>(fakeUsers)
  }
  public saveAdmin(admin: string): Observable<any> {
    //   "content-type": "application/x-www-form-urlencoded",
    let output = {}
    let options = new HttpHeaders().set('Content-Type', 'application/json')

    this.http.post("http://localhost:3000/api/v1/saveadmin", admin, { headers: options })
      .subscribe(result => { output = result })
    return of(output)
  }
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
