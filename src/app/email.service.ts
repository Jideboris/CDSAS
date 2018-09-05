import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { SEND_CLIENT_EMAIL_URL } from './constants'


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }
  
  public sendEmail(contents: string): Observable<any> {
    let output = {}
    let options = new HttpHeaders().set('Content-Type', 'application/json')
    this.http.post(SEND_CLIENT_EMAIL_URL, contents, { headers: options })
      .subscribe(result => { output = result })
    return of(output)
  }
   

   
}
