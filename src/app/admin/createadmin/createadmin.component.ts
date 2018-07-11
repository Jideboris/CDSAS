import { Component, OnInit } from '@angular/core'
import { Router} from '@angular/router'
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent implements OnInit {
  model: any = {}
  constructor(private router: Router,private adminservice: AdminService) { }

  ngOnInit() {}

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
  saveadmin() {
    alert('hello')
    this.router.navigateByUrl('/addemployees')
  }
}
