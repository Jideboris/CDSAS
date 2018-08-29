import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SAVE_CLIENT_EMPLOYEES_URL, GET_CLIENT_EMPLOYEES_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  public saveEmployees(employees: string): Observable<any> {
    let output = {}
    let options = new HttpHeaders().set('Content-Type', 'application/json')
    this.http.post(SAVE_CLIENT_EMPLOYEES_URL, employees, { headers: options })
      .subscribe(result => output = result)
    return of(output)
  }
  public getclientemployees(regcode: string): Observable<string> {
    let output = this.http.get<string>(GET_CLIENT_EMPLOYEES_URL + `${regcode}`)
    return output //|| output
  }
  public deleteclientemployee(regcode: any, employee: any): Observable<string> {
    let output = this.http.get<string>(GET_CLIENT_EMPLOYEES_URL + `${regcode}` + `/${employee}`)
    return output //|| output
  }

}
