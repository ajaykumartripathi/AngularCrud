import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router'
import { constant } from 'src/app/core/const';
import { HttpService } from 'src/app/core/service/http.service';
import { ApiUrl } from 'src/app/core/api';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  signup!:FormGroup;
  submitted:Boolean = false;
  constructor(
    private fb:FormBuilder,
    private httpsx:HttpClient,
    private router:Router,
    private httpservice:HttpService,public userservice:UserService)
   { }

  ngOnInit(): void {
    this.initForm()
  }
 
  initForm(){
    this.signup=this.fb.group({
      firstname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-Z ]*')]],
      lastname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-zA-Z ]*')]],
      email:['',[Validators.required,Validators.email,Validators.pattern(constant.EMAIL)]],
      phone:['', [Validators.required]],
      password:['',[Validators.required,Validators.pattern(constant.PASSWORD)]],
      confirmPassword:['',[Validators.required]]},
      {validator: ConfirmedValidator('password', 'confirmPassword')
    })
  
    
    function ConfirmedValidator(controlName: string, matchingControlName: string){
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
              return;
          }
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ confirmedValidator: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
  }
    
  }
  onSubmit() {

    // console.log(this.signup.value);
    // console.log(this.signup);
    this.submitted = true;
    var name = this.signup.controls.firstname.value;
    this.signup.value.phone = this.signup.controls.phone.value.number;
    // stop here if form is invalid
    if (this.signup.valid) {


///Beehaviour sub

this.httpservice.postData(ApiUrl.apiUrl.signup,this.signup.value).subscribe((res:any) => {
        // console.log(res);
        // console.log(res.status);
          swal.fire({
          position:'top-right',
          icon: 'success',
          title:'Hello'+" "+name,
          text: res.message,
          showConfirmButton: true,
          //timer: 1500
        })
 

        console.log(res.token)
        console.log(res.tokenpayload._id)
        localStorage.setItem("usersdata",JSON.stringify(res))

        this.router.navigateByUrl('/layout')
        this.userservice.setData(res.data[0])
        
  },err => {
    console.log(err);
    //alert(err.message);
      swal.fire({
        icon: 'warning',
        text: err.error.message,
        showConfirmButton: true,
    })
  });
    }

  
  }

}
