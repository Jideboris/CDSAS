import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { Employee } from './model/Employee'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  public getemployees():Observable<Employee[]> {

    let fakeUsers = [{ empid: 1, firstname: 'Dhiraj', lastname: 'Ray', email: 'dhiraj@gmail.com' },
    { empid: 1, firstname: 'Tom', lastname: 'Jac', email: 'Tom@gmail.com' },
    { empid: 1, firstname: 'Hary', lastname: 'Pan', email: 'hary@gmail.com' },
    { empid: 1, firstname: 'praks', lastname: 'pb', email: 'praks@gmail.com' },
    ];

    return of<Employee[]>(fakeUsers)


  }
}