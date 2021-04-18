import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userData:any
  localData:any
  imgd:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userData=localStorage.getItem('usersdata')
this.localData=JSON.parse(this.userData)
console.log(this.localData)
this.imgd=localStorage.getItem('image')

  }
  
onLogout(){
  localStorage.removeItem('usersdata')
  localStorage.removeItem('image')
  location.reload()
}
}
