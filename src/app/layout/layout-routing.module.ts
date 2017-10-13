import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { StudentComponent } from "../student/student.component";
import { ClassesComponent } from "../classes/classes.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                //component: StudentComponent
                loadChildren: '../student/student.module#StudentModule'
            },
            {
                path: 'classes',
                //component: ClassesComponent
                loadChildren: '../classes/classes.module#ClassesModule'
            },
            {
                path: 'student',
                //component: StudentComponent
                loadChildren: '../student/student.module#StudentModule'
            }

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {

}