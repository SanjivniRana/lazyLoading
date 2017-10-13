import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClassesComponent } from "./classes.component";
import { ClassesHeaderComponent } from "./classesHeader/classesHeader.component";
import { ClassesRoutingModule } from "./classes-routing.module";

@NgModule({
    declarations: [
       ClassesComponent
    ],
    imports: [
        ClassesRoutingModule
    ],
    providers: [],
    bootstrap: [ClassesComponent]
})
export class ClassesModule { }
