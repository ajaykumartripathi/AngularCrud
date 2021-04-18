import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from '../layout/posts/posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';
import { LayoutModule } from './layout.module';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {path:'',component:LayoutComponent},
  {path:'myprofile',component:MyProfileComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'post',component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
