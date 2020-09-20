import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../environments/environment';
import { LoginRequestPayload } from '../models/login-request.payload';
import { LoginResponsePayload } from '../models/login-response.payload';
import { Observable } from 'rxjs';
import { SignUpRequestPayload } from '../models/signup-request.payload';
import { SignUpResponsePayload } from '../models/signup-response.payload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(credentials: LoginRequestPayload): Observable<LoginResponsePayload> {
    return this.httpClient.post<LoginResponsePayload>(
      apiUrl + '/auth/login',
      credentials
    );
  }

  signUp(user: SignUpRequestPayload): Observable<SignUpResponsePayload> {
    return this.httpClient.post<SignUpResponsePayload>(
      apiUrl + '/auth/signup',
      user
    );
  }
}
