import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:5000/pianotick/register';
  private _loginUrl = 'http://localhost:5000/pianotick/login';

  constructor(private _http: HttpClient, private _router: Router) {}

  registerUser(user: any) {
    return this._http.post<any>(this._registerUrl, user);
  }

  loginUser(user: any) {
    return this._http.post<any>(this._loginUrl, user);
  }

  isLoggedIn() {
    return !!sessionStorage.getItem('token');
  }
}
