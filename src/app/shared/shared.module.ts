import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, UserModule, AuthModule],
})
export class SharedModule {}
