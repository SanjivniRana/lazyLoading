import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DataService } from "../services/data.service";
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //state write here only
  state: RouterStateSnapshot;
  returnUrl: string;

  //Login
  loginDetails: any;
  loading: false;
  public studentsLogin: Students[];

  constructor(
    private DataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }



  //Login
  onLogin(fLogin: NgForm) {

    this.loginDetails = fLogin.value;
    console.log(this.loginDetails);

    //GET from api Student
    this.DataService.adminLogin(this.loginDetails).subscribe(
      (students) => {
        console.log(students);
        this.studentsLogin = students;
        var a = localStorage.setItem('currentUser', JSON.stringify(students));

        this.returnUrl = this.route.snapshot.queryParams['layout'] || '/layout';
        this.router.navigate([this.returnUrl]);

      });

  }





}


//INTERFACES
interface Students {
  id: number,
  name: string,
  email: string,
  age: number
}

interface loginDetails {
  // username: string;
  // password: string;
  name: string;
  email: string;
}