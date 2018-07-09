import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adminemployees',
  templateUrl: './adminemployees.component.html',
  styleUrls: ['./adminemployees.component.css']
})
export class AdminemployeesComponent implements OnInit {
  @Input() isaddemployee: boolean
  constructor() {
    this.isaddemployee = false
  }

  ngOnInit() {
  }

}
