import { AuthGuard } from './authguard.service'
import { Routes } from '@angular/router'
import { CreateadminComponent } from './admin/createadmin/createadmin.component'
import { AdminemployeesComponent } from './admin/adminemployees/adminemployees.component'

import { LoginComponent } from './login/log-in/login.component'
import { AnswerMultipleComponent } from './answer-multiple/answer-multiple.component'
import { AnswerSingleComponent } from './answer-single/answer-single.component'
import { AnswerWriteComponent } from './answer-write/answer-write.component'
import { CyberIssuesComponent } from './cyber-issues/cyber-issues.component'
import { BoardComponent } from './board/board.component'
import { ClientsComponent } from './clients/clients.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { ClientRegComponent } from './client-reg/client-reg.component'
import { HomeComponent } from './home/home.component'
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
export const routes: Routes = [
    {
        path: 'client/:regcode',
        component: CreateadminComponent
    },
    {
        path: 'addemployees',
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always',
        component: AdminemployeesComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'answersingle',
        canActivate: [AuthGuard],
        component: AnswerSingleComponent
    },
    {
        path: 'answermultiple',
        canActivate: [AuthGuard],
        component: AnswerMultipleComponent
    },
    {
        path: 'answerwrite',
        canActivate: [AuthGuard],
        component: AnswerWriteComponent
    },
    {
        path: 'admin',
        component: ClientRegComponent
    },
    {
        path: 'about',
        component: AboutusComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'cyberissues',
       // canActivate: [AuthGuard],
        component: CyberIssuesComponent
    },
    {
        path: 'board',
        //canActivate: [AuthGuard],
        component: BoardComponent
    },
    {
        path: 'clients',
        // canActivate: [AuthGuard],
        component: ClientsComponent
    },
    { path: '**', component: PagenotfoundComponent }

];
