import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  userData:any
  localData:any
  constructor() { }

  ngOnInit(): void {
    this.userData=localStorage.getItem('usersDetail')
this.localData=JSON.parse(this.userData)
console.log(this.localData)
  }

}
