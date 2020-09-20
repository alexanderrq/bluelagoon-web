import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { LoginRequestPayload } from 'src/app/models/login-request.payload';
import { TokenStorageService } from 'src/app/shared/token-storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn: boolean;
  isLoginFailed: boolean;
  errorMessage: string;
  roles: string[];
  loginRequestPayload: LoginRequestPayload;

  constructor(
    private authService: AuthService,
    private tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.loginRequestPayload = {
      username: '',
      password: '',
    };
    this.roles = [];
    this.isLoggedIn = false;
    this.isLoginFailed = false;
    this.errorMessage = '';
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getUser().roles;
    }
  }

  public onSubmit(): void {
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginRequestPayload).subscribe(
      (data) => {
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        this.reloadPage();
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        throwError(error);
      }
    );
  }

  private reloadPage(): void {
    window.location.reload();
  }
}
