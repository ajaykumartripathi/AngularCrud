import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './external/login/login.component';
import { SignupComponent } from './external/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './external/pagenotfound/pagenotfound.component';
import { HomePageComponent } from './external/home-page/home-page.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AllUsersComponent } from './external/all-users/all-users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './external/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    HomePageComponent,
    AllUsersComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
