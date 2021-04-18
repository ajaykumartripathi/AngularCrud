import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import{Router} from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner';
import { constant } from 'src/app/core/const';
import { ApiUrl } from 'src/app/core/api';
import { HttpService } from 'src/app/core/service/http.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!:FormGroup;
  submitted:Boolean = false;
  constructor(
    private fb:FormBuilder,
    private httpx:HttpClient,
    private router:Router,
    private spinner: NgxSpinnerService,
    private httpservice:HttpService,
    private userservice:UserService
  ) { }

  ngOnInit(): void {

    this.initForm();
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
          this.spinner.hide();
    }, 1000);
  }

  initForm(){
    this.login=this.fb.group({
      email:['',[Validators.required,Validators.email,Validators.pattern(constant.EMAIL)]],
      password:['',[Validators.required,Validators.pattern(constant.PASSWORD)]],
      })
  }
  
  onSubmit(){
    // console.log(this.login);
    //var name = this.login.controls.firstname.value;
    this.submitted=true;
    if(!this.login.invalid){
      console.log(this.login.value);
      this.httpservice.postData(ApiUrl.apiUrl.login, this.login.value).subscribe((res:any) => {
        // console.log(res);
        //alert(res.message);
        this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
          this.spinner.hide();
    }, 5000);
        swal.fire({
          icon: 'success',
          title:'Hello'+" "+name,
          text: res.message,
          showConfirmButton: true,
      })
      console.log(res.data)
      localStorage.setItem('usersdata',JSON.stringify(res))
        this.router.navigateByUrl('/layout');
        this.userservice.setData(res.data[0])
      },err => {
        console.log(err);
        //alert(err.error.message);
        swal.fire({
          icon: 'warning',
          title:'Warning!',
          text: err.error.message,
          showConfirmButton: true,
      })
      });
    }

  }
}
