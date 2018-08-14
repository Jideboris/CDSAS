import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { Employee } from './model/Employee'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { SAVE_ADMIN_URL, GET_SUBSCRIPTION_URL, SAVE_CLIENT_REGISTRATION_URL, GET_CLIENTREG_URL,SAVE_CLIENT_REGISTRATION_FORM_URL } from '../constants'
import { Dropdown } from './model/Adminstrator'


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

  public getsubcriptions(): Observable<Dropdown[]> {
    let output = this.http.get<Dropdown[]>(GET_SUBSCRIPTION_URL)
    return output || of()
  }
  public getclientregistration(regcode: string): Observable<string> {
    let output = this.http.get<string>(GET_CLIENTREG_URL + `${regcode}`)
    return output || of()
  }
  public saveAdmin(admin: string): Observable<any> {
    let output = {}
    let options = new HttpHeaders().set('Content-Type', 'application/json')
    this.http.post(SAVE_ADMIN_URL, admin, { headers: options })
      .subscribe(result => { output = result })
    return of(output)
  }
  public saveClientRegistrationForm(clientregistrationform: string): Observable<any> {
    let output = {}
    let options = new HttpHeaders().set('Content-Type', 'application/json')
    this.http.post(SAVE_CLIENT_REGISTRATION_FORM_URL, clientregistrationform, { headers: options })
      .subscribe(result => { output = result })
    return of(output)
  }

  public saveClientRegistration(clientreg: string): Observable<any> {
    let output = {}
    let options = new HttpHeaders().set('Content-Type', 'application/json')
    this.http.post(SAVE_CLIENT_REGISTRATION_URL, clientreg, { headers: options })
      .subscribe(result => { output = result })
    return of(output)
  }
}
