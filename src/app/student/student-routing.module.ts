import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student.component";
import { StudentHeaderComponent } from "./studentHeader/studentHeader.component";

const routes: Routes = [
    {
        path: '',
        component: StudentComponent,
        children: [

            {
                path: '',
                //component: StudentHeaderComponent
                loadChildren: './studentHeader/studentHeader.module#StudentHeaderModule'
            },

            {
                path: 'studentHeader',
                loadChildren: './studentHeader/studentHeader.module#StudentHeaderModule'
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule {

}