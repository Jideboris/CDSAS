import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { routes } from "./app.routing.module"
@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}