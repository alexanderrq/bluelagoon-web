import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { SignUpRequestPayload } from 'src/app/models/signup-request.payload';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  signUpRequestPayload: SignUpRequestPayload;
  isSuccessful: boolean;
  isSignUpFailed: boolean;
  errorMessage: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.signUpRequestPayload = {
      username: '',
      password: '',
      email: '',
      phoneNumber: '',
      roles: ['user', 'mod', 'admin'],
    };
    this.isSuccessful = false;
    this.isSignUpFailed = false;
    this.errorMessage = '';
    this.signUpForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
    });
  }

  public onSubmit(): void {
    this.signUpRequestPayload.username = this.signUpForm.get('username').value;
    this.signUpRequestPayload.email = this.signUpForm.get('email').value;
    this.signUpRequestPayload.password = this.signUpForm.get('password').value;
    this.signUpRequestPayload.phoneNumber = this.signUpForm.get(
      'phoneNumber'
    ).value;

    this.authService.signUp(this.signUpRequestPayload).subscribe(
      (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
        throwError(error);
      }
    );
  }
}
