import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentComponent } from "./student.component";
import { StudentRoutingModule } from "./student-routing.module";
//import { StudentHeaderComponent } from "./studentHeader/studentHeader.component";
//import { ProfileComponent } from "./profile/profile.component";

import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddStudentComponent } from "./add-student/add-student.component";

@NgModule({
    declarations: [
       StudentComponent
    ],
    imports: [
        StudentRoutingModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [StudentComponent],
    // exports: [
    //     AddStudentComponent
    // ]
})
export class StudentModule { }
