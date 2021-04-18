
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import {UserService} from './../service/user.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  message:any;
  subscription!: Subscription;

  constructor(private router:Router, public userservice:UserService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // var getdata:any=localStorage.getItem('localdata')
      // var jsondata=JSON.parse(getdata)
      
      if(localStorage.getItem('usersdata')){
        return true
      }
      else{
        this.router.navigateByUrl('/login')
        return false;
      }
  }
  
}
