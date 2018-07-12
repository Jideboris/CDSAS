import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
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
        saveadmin$: Observable<Action> = this.actions$
            .ofType<fromActions.SaveAdmminAction>(fromActions.SAVE_ADMIN)
            .pipe(map(action => action.payload))
            .pipe(switchMap((ad) => this.adminService.saveAdmin(ad)))
            .pipe(
                map(result => {
                    if (!result) {
                        return new fromActions.SaveAdminFailedAction('Could not fetch data!')
                    } else {
                        return new fromActions.SaveAdminDoneAction(result)
                    }
                }),
                catchError((err, caught) => {
                    return of(err)
                })
            )


}