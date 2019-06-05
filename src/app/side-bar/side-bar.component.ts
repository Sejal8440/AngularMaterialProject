import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';



export interface DialogData {
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  constructor(private _userauth:UserAuthService, private _router:Router) { }
  get isLoggedIn():boolean{
    return this._userauth.isLoggedIn;
  }
  logOut(){
    this._userauth.logout();
  }
  ngOnInit() {
  }
  loginForm(){
    this._router.navigateByUrl('/login');
  }
}
