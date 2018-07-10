import { Component, OnInit } from '@angular/core'
import { ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent implements OnInit {
  model: any = {}
  constructor(private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
  saveadmin() {
    alert('hello')
    this.router.navigateByUrl('/addemployees')
  }
}
