import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./header/header.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ClassesComponent } from "../classes/classes.component";
import { StudentComponent } from "../student/student.component";

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        //StudentComponent,
        //ClassesComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        LayoutRoutingModule,
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class LayoutModule { }
