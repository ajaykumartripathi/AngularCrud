import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShareComponent, EditProfileComponent],
  exports:[
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
 
})
export class ShareModule { }
