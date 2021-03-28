import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './external/login/login.component';
import { SignupComponent } from './external/signup/signup.component';
import { PagenotfoundComponent } from './external/pagenotfound/pagenotfound.component';
import { HomePageComponent } from './external/home-page/home-page.component';
import { AllUsersComponent } from './external/all-users/all-users.component';
import { PostComponent } from './external/post/post.component';
const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'allusers',component:AllUsersComponent},
  {path:'post',component:PostComponent},
  {path:'layout',loadChildren:() =>import('./layout/layout.module').then(m=>m.LayoutModule)},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
