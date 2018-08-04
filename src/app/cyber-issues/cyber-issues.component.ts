import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-cyber-issues',
  templateUrl: './cyber-issues.component.html',
  styleUrls: ['./cyber-issues.component.css']
})
export class CyberIssuesComponent implements OnInit {
  model: any = {}
  employees$: Observable<any[]>
  constructor() { }

  ngOnInit() {
  }
  onSubmit() { }
  saveemployee() {

  }
  addemployee() {

  }
}
