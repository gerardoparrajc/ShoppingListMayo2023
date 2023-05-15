import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlServer: string = 'https://dummyjson.com';

  private _isLogged: boolean = false;

  public get isLogged(): boolean {
    return sessionStorage.getItem('isLogged') === 'true';
    // return this._isLogged;
  }

  public set isLogged(value: boolean) {
    sessionStorage.setItem('isLogged', String(value));
    this._isLogged = value;
  }

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${this.urlServer}/auth/login`, {
      username: username,
      password: password
    });
  }

  registro(username: string, password: string) {
    return this.http.post(`${this.urlServer}/users/add`, {
      username: username,
      password: password
    });
  }

  logout() {
    this.isLogged = false;
  }
}
