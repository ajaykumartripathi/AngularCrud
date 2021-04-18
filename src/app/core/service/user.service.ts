import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
   user:BehaviorSubject<any> = new BehaviorSubject(null);  
  setData(value:any) {
    this.user.next(value); 
    localStorage.setItem('usersdata',JSON.stringify(value))
    localStorage.setItem('image',value.profile_pic)
  }
}
