import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './external/login/login.component';
import { SignupComponent } from './external/signup/signup.component';
import { PagenotfoundComponent } from './external/pagenotfound/pagenotfound.component';
import { HomePageComponent } from './external/home-page/home-page.component';
import { AllUsersComponent } from './external/all-users/all-users.component';
import { AuthGuard } from './core/guard/auth.guard';
import { EditUserDataComponent } from './external/edit-user-data/edit-user-data.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'allusers',component:AllUsersComponent},
  {path:'edituser',component:EditUserDataComponent},
  {path:'layout',loadChildren:() =>import('./layout/layout.module').then(m=>m.LayoutModule),canActivate:[AuthGuard]},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
