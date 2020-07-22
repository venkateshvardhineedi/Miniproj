import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _registerUrl = "http://localhost:4000/register"
  public _loginUrl ="http://localhost:4000/login"
  constructor(public http:HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
   return localStorage.getItem('token')
  }
}
