import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginUserData ={}

  constructor(public _auth:AuthService, public router:Router) { }

  ngOnInit() {
    
  }
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res.token)
      this.router.navigate(['/members/tab2'])
    },
    err => console.log(err)
    )
  }

}
