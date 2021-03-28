import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import{Router} from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner';

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
    private spinner: NgxSpinnerService
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
      email:['',[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm)]],
      })
  }
  
  onSubmit(){
    // console.log(this.login);
    //var name = this.login.controls.firstname.value;
    this.submitted=true;
    if(!this.login.invalid){
      console.log(this.login.value);
      this.httpx.post('http://localhost:9000/login', this.login.value).subscribe((res:any) => {
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
        this.router.navigateByUrl('/layout');
        
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
