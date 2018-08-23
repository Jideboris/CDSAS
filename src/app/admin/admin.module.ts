import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminService } from './admin.service'
import { CreateadminComponent } from './createadmin/createadmin.component'
import { AdminemployeesComponent } from './adminemployees/adminemployees.component'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { reducers, metaReducers } from '../store/reducers'
import { AdminEffects } from '../store/effects/admin'
import { ClientEffects } from '../store/effects/client'
import { LoginService } from '../login/login.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AdminEffects, ClientEffects])
  ],
  declarations: [
    CreateadminComponent,
    AdminemployeesComponent,

  ],
  providers: [
    AdminService, LoginService
  ]
})

export class AdminModule { }