import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";
import { ClassesHeaderComponent } from "./classesHeader.component";
import { ClassComponent } from "../class/class.component";
import { AddClassesComponent } from "../add-classes/add-classes.component";

const routes: Routes = [
    {
        path: '',
        component: ClassesHeaderComponent,
        children:
        [
            { path: '', component: ClassComponent },
            { path: 'class', component: ClassComponent },
            { path: 'add-classes', component: AddClassesComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassesHeaderRoutingModule {

}