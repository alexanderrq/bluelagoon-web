import { Component, OnInit } from '@angular/core';
import { LoginResponsePayload } from './models/login-response.payload';
import { TokenStorageService } from './shared/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn: boolean;
  showAdminBoard: boolean;
  showModeratorBoard: boolean;
  username: string;

  constructor(private tokenService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = false;
    this.showAdminBoard = false;
    this.showModeratorBoard = false;

    this.isLoggedIn = !!this.tokenService.getToken();

    if (this.isLoggedIn) {
      const user: LoginResponsePayload = this.tokenService.getUser();

      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
  }

  public logOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
