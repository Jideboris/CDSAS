import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { Employee } from './model/Employee'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { SAVE_ADMIN_URL } from '../constants'


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
    let output = {}
    let options = new HttpHeaders().set('Content-Type', 'application/json')

    this.http.post(SAVE_ADMIN_URL, admin, { headers: options })
      .subscribe(result => { output = result })
    return of(output)
  }
}
