import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';

import Swal from 'sweetalert2';
import { FormBuilder,FormGroup} from '@angular/forms';
import {UserService} from '../../core/service/user.service'
import { ActivatedRoute, Router } from '@angular/router';
import {Users} from '../../core/Models/users.model'
import { EditUserDataComponent } from '../edit-user-data/edit-user-data.component';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit,AfterViewInit {
  @ViewChild(EditUserDataComponent)
  edituser!: EditUserDataComponent;

  dbdata:any
  id!: Users;
  firstname!:Users
  lastname!:Users
  email!:Users
  phone:any
  profile:any
  user_id:any
  image:any
  paramsSubscription:any
  profile_pic!: FormGroup;
  constructor(private httpclient: HttpClient,private fb:FormBuilder,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
  //   this.profile_pic=this.fb.group({
  //     user_id:['']
  //  })
this.onSubmit()
  }


  /************Show All Api**************/ 
  onSubmit(){
    this.httpclient.get('http://localhost:9000/showAll').subscribe((data:any) =>{
      console.log(data);
      this.dbdata=data.data
      // console.log(this.dbdata)
      // console.log(this.dbdata[0].first_name)
      
      },
      err=>{
        console.log(err.error.message)
       })
       
      }


//**********Delete Api************/ 

  ondelete(id:any){
    Swal.fire({
      title: 'Are you sure delete your data ?',
      position:'top',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Delete`,
       //denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.httpclient.delete('http://localhost:9000/delete/'+id).subscribe((data:any) =>{
          console.log(data);   
      })
        Swal.fire('Deleted', '', 'success')
      } else {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
}

//***********Edit Table data two way binding*************/ 

onEdit(value:any){
  // this.httpclient.get('http://localhost:9000/showOne/'+value).subscribe((data:any) =>{
  //     console.log("onedata",data.data)
  //     console.log(value)
  //     },
  //     err=>{
  //       console.log(err.error.message)
  //      })
// this.router.navigate(['/edituser',this.dbdata.id])
// this.id=index
// this.firstname=data.first_name
// this.lastname=data.last_name
// this.email=data.email
// this.phone=data.phone_number

}

/***************Save data Api after edit form*****************/
onSave(){
  console.log(this.profile);
  this.httpclient.put('http://localhost:9000/update/'+this.id,{firstname:this.firstname,lastname:this.lastname,email:this.email,phone:this.phone}).subscribe((data:any) =>{
          console.log("databasedata",data);
          console.log(this.profile)
      })
  // this.httpclient.put('http://localhost:9000/profile/'+this.id,{profile:this.profile}).subscribe((data:any) =>{
  //       console.log(data);
  //   })
  
}

onSend(){
  const formData=new FormData()
  var user_id=this.profile_pic.controls.user_id.value
  formData.append('profile_picture',this.image)
formData.append('user_id',user_id)
this.httpclient.put('http://localhost:9000/profile',formData).subscribe((data:any)=> {
  console.log(data);
// this.dbdata=data.data
alert("upload sucess")
},
err=>{
  console.log(err.message)
  alert("not uploaded")
} )
}
//fileUpload
onFileUpload(event:any){
  if(event.target.files.length>0){
    const file=event.target.files[0]
    this.image=file
  }
}
onAddUser(){

}

formData(){
  // this.paramsSubscription = this.route.params.subscribe(params=>{
  //    console.log("formdata",params['firstname'])
  //   })
  // console.log(this.route.snapshot.paramMap.get('firstname'))
  
  console.log(this.edituser.editform)
}
ngAfterViewInit(){
  
  this.formData();
}
}
