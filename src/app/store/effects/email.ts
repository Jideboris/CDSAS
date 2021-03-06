import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as fromActions from '../actions/email'
import { map, switchMap } from "rxjs/operators"
import { EmailService } from '../../email.service';


@Injectable()
export class EmailEffects {
    constructor(private actions$: Actions, private emailService: EmailService) {
        
    }
    @Effect()
    messageclient$: Observable<Action> = this.actions$.pipe(
        ofType<fromActions.MessageClientEmployees>(fromActions.MESSAGE_CLIENT_EMPLOYEE),
        switchMap(action => this.emailService.messageEmployees(action.payload)
            .pipe(map(result => {
                if (!result) {
                    return new fromActions.MessageClientEmployeesFailed('Could not send messages!!')
                } else {
                    return new fromActions.MessageClientEmployeesDone(result)
                }
            })
            ))
    )
    @Effect()
    sendemail$: Observable<Action> = this.actions$.pipe(
        ofType<fromActions.SendClientEmail>(fromActions.SEND_CLIENT_EMAIL),
        switchMap(action => this.emailService.sendEmail(action.payload)
            .pipe(map(result => {
                if (!result) {
                    return new fromActions.SendClientEmailFailed('Could not send email!!')
                } else {
                    return new fromActions.SendClientEmailDone(result)
                }
            })
        ))
    )
}