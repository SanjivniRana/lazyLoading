import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
    },
    {
        path: 'layout',
        loadChildren: './layout/layout.module#LayoutModule',
        //component: LayoutComponent
    },
    {
        path: 'login',
        //loadChildren: './login/login.module#LoginModule'
        component: LoginComponent
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}