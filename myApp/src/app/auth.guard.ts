import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(public _authservice:AuthService,
    public router: Router ){}

    canActivate():boolean {
      if(this._authservice.loggedIn()){
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      }
    }
  
}
