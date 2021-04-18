import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserDataComponent } from '../external/edit-user-data/edit-user-data.component';

const routes: Routes = [
  {path:'edituser',component:EditUserDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
