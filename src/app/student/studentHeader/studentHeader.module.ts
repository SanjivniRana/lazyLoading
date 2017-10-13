import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentHeaderComponent } from "./studentHeader.component";
import { StudentHeaderRoutingModule } from "./studentHeader-routing.module";
import { ProfileComponent } from "../profile/profile.component";
import { AddStudentComponent } from "../add-student/add-student.component";

import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        StudentHeaderComponent,
        ProfileComponent,
        AddStudentComponent
    ],
    imports: [
        StudentHeaderRoutingModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [StudentHeaderComponent],
   
})
export class StudentHeaderModule { }
