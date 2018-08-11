import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import * as fromActions from '../actions/admin'
import { AdminService } from '../../admin.service'
import { map, switchMap, catchError } from "rxjs/operators"


@Injectable()
export class EmployeeEffects {
    constructor(private actions$: Actions,
        private adminService: AdminService) {
    }

    @Effect()
    retrieveemployees$: Observable<Action> = this.actions$
        .ofType<fromActions.GetEmployeesAction>(fromActions.GET_EMPLOYEES)
        .pipe(switchMap(() => this.adminService.getemployees()))
        .pipe(
            map(result => {
                if (!result) {
                    return new fromActions.GetEmployeeFailedAction('Could not fetch data!')
                } else {
                    return new fromActions.GetEmployeesDoneAction(result)
                }
            }),
            catchError((err, caught) => {
                return of(err)
            })
        )
    @Effect()
    getsubcriptions$: Observable<Action> = this.actions$
        .ofType<fromActions.GetSubscriptionAction>(fromActions.GET_SUBSCRIPTION)
        .pipe(switchMap(() => this.adminService.getsubcriptions()))
        .pipe(
            map(result => {
                if (!result) {
                    return new fromActions.GetSubscriptionFailedAction('Could not fetch data!')
                } else {
                    return new fromActions.GetSubscriptionDoneAction(result[0],result[1],result[2])
                }
            }),
            catchError((err, caught) => {
                return of(err)
            })
        )

    @Effect()
    addadmin$: Observable<Action> = this.actions$.pipe(
        ofType<fromActions.SaveAdmminAction>(fromActions.ADD_ADMIN),
        switchMap(action => this.adminService.saveAdmin(action.payload)
            .pipe(map(result => {
                if (!result) {
                    return new fromActions.SaveAdminFailedAction('Could not fetch data!')
                } else {
                    return new fromActions.SaveAdminDoneAction(result)
                }
            })
        ))
    )

    @Effect()
    addclientregistration$: Observable<Action> = this.actions$.pipe(
        ofType<fromActions.SaveClientRegistration>(fromActions.ADD_CLIENT_REGISTRATION),
        switchMap(action => this.adminService.saveClientRegistration(action.payload)
            .pipe(map(result => {
                if (!result) {
                    return new fromActions.SaveAdminFailedAction('Could not fetch data!')
                } else {
                    return new fromActions.SaveClientRegistrationDone(result)
                }
            })
        ))
    )

}