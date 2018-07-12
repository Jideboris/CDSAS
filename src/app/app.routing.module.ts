import { AuthGuard } from './authguard.service'
import { Routes } from '@angular/router'
import { CreateadminComponent } from './admin/createadmin/createadmin.component'
import { AdminemployeesComponent } from './admin/adminemployees/adminemployees.component'

import {LoginComponent} from './login/login.component'
import {AnswerMultipleComponent} from './answer-multiple/answer-multiple.component'
import {AnswerSingleComponent} from './answer-single/answer-single.component'
import {AnswerWriteComponent} from './answer-write/answer-write.component'

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
export const routes: Routes = [
    {
        path: 'client/:client-code',
        //canActivate: [AuthGuard],
        component: CreateadminComponent
    },
    {
        path: 'addemployees',
        // canActivate: [AuthGuard],
        component: AdminemployeesComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'answersingle',
        component: AnswerSingleComponent
    },
    {
        path: 'answermuitiple',
        component: AnswerMultipleComponent
    },
    {
        path: 'answerwrite',
        component: AnswerWriteComponent
    },

    { path: '**', component: PagenotfoundComponent }

];
