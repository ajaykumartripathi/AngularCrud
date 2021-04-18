import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-data',
  templateUrl: './edit-user-data.component.html',
  styleUrls: ['./edit-user-data.component.css']
})
export class EditUserDataComponent implements OnInit {
  editform!:FormGroup;
  paramsSubscription:any
  showpassword:boolean=false
  id:any
  constructor(private fb:FormBuilder,
    private httpsx:HttpClient,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.editform=this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      phone:[''],
      password:[''],
      confirmpassword:['']
    });
    this.getFormdata()
  }
  getFormdata(){
    this.paramsSubscription = this.route.queryParams.subscribe(params=>{
      this.showpassword=params.check
      this.id=params.id
      this.editform.removeControl("password")
      this.editform.removeControl("confirmpassword")
      this.editform.patchValue({
        firstname: params.firstname,
        lastname: params.lastname,
        email: params.email,
        phone: params.phone,
      });

    })

  }
  onSubmit(){
    console.log(this.id)
    console.log("addeditsubmitdata",this.editform)
     this.httpsx.put('http://localhost:9000/update/'+this.id,this.editform).subscribe((data:any) =>{
      console.log("onedata",data.data)
      alert("update")
      // console.log(value)
      },
      err=>{
        alert("not upload")
       })
  }
}
