import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //state write here only
  state: RouterStateSnapshot;
  returnUrl: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');

    console.log("clicked");
    
    this.returnUrl = this.route.snapshot.queryParams['login'] || '/login';
    this.router.navigate([this.returnUrl]);

  }

}
