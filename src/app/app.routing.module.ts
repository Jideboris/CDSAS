
import { Routes } from '@angular/router'
import { CreateadminComponent } from './admin/createadmin/createadmin.component'
import { AdminemployeesComponent } from './admin/adminemployees/adminemployees.component'
export const routes: Routes = [
    { path: '', component: CreateadminComponent },
    { path: 'addemployees', component: AdminemployeesComponent }
];
