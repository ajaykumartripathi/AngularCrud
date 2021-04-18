import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
message:any
  subscription!: Subscription;
  userData:any
  localData:any
  image:any
  id:any
  imgd:any
  constructor(public userservice:UserService,private httpclient:HttpClient) { }

  ngOnInit(): void {
    
    this.subscription=this.userservice.user.subscribe((user)=>{
      this.id=this.localData.id
      this.localData=user
    console.log(this.message)
    })
    this.imgd=localStorage.getItem('image')
this.userData=localStorage.getItem('usersdata')
this.localData=JSON.parse(this.userData)
this.id=this.localData.id
console.log(this.localData)
  }
onUpload(event:any){
  if(event.target.files.length>0){
    const file=event.target.files[0]
    this.image=file
}
}
onSubmit(){
console.log('work on submit')
const formData= new FormData()
formData.append("profile_picture",this.image)
formData.append('id',this.id)
this.httpclient.put('http://localhost:9000/profile',formData).subscribe((data:any)=>{
  alert('update')
// this.imgd=data.image
localStorage.setItem('image',data.image)
this.imgd=localStorage.getItem('image')
window.location.reload()
},
err=>{
  console.log(err.message)
  alert('error')
})
}

}


