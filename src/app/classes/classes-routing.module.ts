import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";
import { ClassesComponent } from "./classes.component";
import { ClassesHeaderComponent } from "./classesHeader/classesHeader.component";

const routes: Routes = [
    {
        path: '',
        component: ClassesComponent,
        children: [

            {
                path: '',
                loadChildren: './classesHeader/classesHeader.module#ClassesHeaderModule'
            },

            {
                path: 'classesHeader',
                loadChildren: './classesHeader/classesHeader.module#ClassesHeaderModule'
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassesRoutingModule {

}