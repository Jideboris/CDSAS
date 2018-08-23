import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as fromActions from '../actions/client'
import { AdminService } from '../../admin/admin.service'
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
                console.log('here3-result')
                if (!result) {
                    return new fromActions.SaveClientEmployeesFailed('Could not save employees!!')
                } else {
                    return new fromActions.SaveClientEmployeesDone(result)
                }
            })
            ))
    )
    
}