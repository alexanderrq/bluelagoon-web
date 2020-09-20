import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';



@NgModule({
  declarations: [ProfileComponent, BoardUserComponent, BoardAdminComponent, BoardModeratorComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
