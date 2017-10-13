import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
    declarations: [
       LoginComponent
    ],
    imports: [
        LoginRoutingModule
    ],
    providers: [],
    bootstrap: [LoginComponent]
})
export class LoginModule { }
