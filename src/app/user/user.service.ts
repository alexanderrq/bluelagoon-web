import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getPublicContent(): Observable<any> {
    return this.httpClient.get(apiUrl + '/test/all', { responseType: 'text' });
  }

  public getUserBoard(): Observable<any> {
    return this.httpClient.get(apiUrl + '/test/user', { responseType: 'text' });
  }

  public getModeratorBoard(): Observable<any> {
    return this.httpClient.get(apiUrl + '/test/mod', { responseType: 'text' });
  }

  public getAdminBoard(): Observable<any> {
    return this.httpClient.get(apiUrl + '/test/admin', {
      responseType: 'text',
    });
  }
}
