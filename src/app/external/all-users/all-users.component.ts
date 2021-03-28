import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  dbdata:any
  id:any
  firstname:any
  lastname:any
  email:any
  phone:any
  profile:any
  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
  }


  /************Show All Api**************/ 
  onSubmit(){
    this.httpclient.get('http://localhost:9000/showAll').subscribe((data:any) =>{
      console.log(data);
      this.dbdata=data.data
      console.log(this.dbdata)
      console.log(this.dbdata[0].first_name)
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

onEdit(data:any,index:any){
this.id=index
this.firstname=data.first_name
this.lastname=data.last_name
this.email=data.email
this.phone=data.phone_number
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
//fileUpload
onfileUpload(event:any){
this.profile=<any>event.target.files[0]
}

}
