import { Component, OnInit } from '@angular/core';
import { LoginResponsePayload } from 'src/app/models/login-response.payload';
import { TokenStorageService } from 'src/app/shared/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: LoginResponsePayload;

  constructor(private tokenService: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
  }
}
