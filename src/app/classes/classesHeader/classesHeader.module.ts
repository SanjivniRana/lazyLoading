import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClassesHeaderComponent } from "./classesHeader.component";
import { AddClassesComponent } from "../add-classes/add-classes.component";
import { ClassesHeaderRoutingModule } from "./classesHeader-routing.module";
import { ClassComponent } from "../class/class.component";

@NgModule({
    declarations: [
        ClassesHeaderComponent,
        AddClassesComponent,
        ClassComponent
    ],
    imports: [
        ClassesHeaderRoutingModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [ClassesHeaderComponent],
   
})
export class ClassesHeaderModule { }
