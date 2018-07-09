import { Component, OnInit, Input } from '@angular/core'
import { Employee } from '../../model/Employee'
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-adminemployees',
  templateUrl: './adminemployees.component.html',
  styleUrls: ['./adminemployees.component.css']
})
export class AdminemployeesComponent implements OnInit {
  @Input() isaddemployee: boolean
  @Input() employees: Employee[]

  constructor(private adminservice: AdminService) {
    this.isaddemployee = true
    this.employees = []
  }
  ngOnInit() {

  }
  getemployees() {
    this.adminservice.getemployees().subscribe(
      data => this.employees = data)
  }
  removeemployee() {
    this.employees.pop()
  }
  saveemployee() {
    console.log(this.employees)
  }
  addemployee() {
    this.isaddemployee = false
    this.employees.push({ empid: 0, firstname: 'firstname', lastname: 'lastname', email: 'email@yahoo.com' })
  }
}
