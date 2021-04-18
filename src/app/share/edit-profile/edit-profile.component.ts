import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editform!:FormGroup;
  constructor(private fb:FormBuilder,
    private httpsx:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editform=this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      phone:['']
    });
    this.route.paramMap.subscribe(params=>{
      const userid= params.get('id')
      console.log('user_id',userid)
    })
  }
  onSubmit(){
    // console.log(this.profile);
    // this.httpclient.put('http://localhost:9000/update/'+this.id,{firstname:this.firstname,lastname:this.lastname,email:this.email,phone:this.phone}).subscribe((data:any) =>{
    //         console.log("databasedata",data);
    //         console.log(this.profile)
    //     })
    // this.httpclient.put('http://localhost:9000/profile/'+this.id,{profile:this.profile}).subscribe((data:any) =>{
    //       console.log(data);
    //   })
    
  }

}
