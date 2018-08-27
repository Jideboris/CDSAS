import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import * as fromActions from '../actions/client'
import { map, switchMap, catchError } from "rxjs/operators"
import { ClientsService } from '../../clients/clients.service';


@Injectable()
export class ClientEffects {
    constructor(private actions$: Actions,
        private clientService: ClientsService) {
    }

    @Effect()
    addemployee$: Observable<Action> = this.actions$.pipe(
        ofType<fromActions.SaveClientEmployees>(fromActions.ADD_CLIENT_EMPLOYEE),
        switchMap(action => this.clientService.saveEmployees(action.payload)
            .pipe(map(result => {
                if (!result) {
                    return new fromActions.SaveClientEmployeesFailed('Could not save employees!!')
                } else {
                    return new fromActions.SaveClientEmployeesDone(result)
                }
            })
            ))
    )

    @Effect()
    getclientemployees$: Observable<Action> = this.actions$
        .ofType<fromActions.GetClientEmployees>(fromActions.GET_CLIENT_EMPLOYEE)
        .pipe(switchMap((payload) => this.clientService.getclientemployees(payload.regcode)))
        .pipe(
            map(result => {
                if (!result) {
                    return new fromActions.GetClientEmployeesFailed('Could not fetch data!')
                } else {
                    console.log(result)
                    return new fromActions.GetClientEmployeesDone(result)
                }
            }),
            catchError((err, caught) => {
                return of(err)
            })
        )

}