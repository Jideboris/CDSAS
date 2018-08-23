import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SAVE_CLIENT_EMPLOYEES_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  public saveEmployees(employees: string): Observable<any> {
    console.log('here3')
    let output = {}
    let options = new HttpHeaders().set('Content-Type', 'application/json')
    this.http.post(SAVE_CLIENT_EMPLOYEES_URL, employees, { headers: options })
      .subscribe(result => { output = result })

    return of(output)
  }
}
