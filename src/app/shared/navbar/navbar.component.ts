import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this._router.navigate(['/login']);
  }
  logout(){
    this.auth.SignOut();
  }
  dashboard() {
    this._router.navigate(['/dashboard']);
  }

}
