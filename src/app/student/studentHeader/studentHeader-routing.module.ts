import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";
import { StudentHeaderComponent } from "./studentHeader.component";
import { ProfileComponent } from "../profile/profile.component";
import { AddStudentComponent } from "../add-student/add-student.component";

const routes: Routes = [
    {
        path: '',
        component: StudentHeaderComponent,
        children:
        [
            { path: '', component: ProfileComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'add-student', component: AddStudentComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentHeaderRoutingModule {

}