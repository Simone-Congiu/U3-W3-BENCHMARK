import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IRegister } from './interfaces/register';
import { IData } from './interfaces/data';
import { ILogin } from './interfaces/login';
import { IUser } from './interfaces/user';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  private authSub = new BehaviorSubject<null | IData>(null);
  user$ = this.authSub.asObservable();
  jtwH: JwtHelperService = new JwtHelperService();
  url: string = 'http://localhost:3000';
  urlRegister: string = 'http://localhost:3000/register';
  urlLogin: string = 'http://localhost:3000/login';
  isLogged = this.user$.pipe(map((user) => !!user));
  register(dato: IRegister) {
    return this.http.post<IData>(this.urlRegister, dato);
  }

  login(dato: ILogin) {
    return this.http.post<IData>(this.urlLogin, dato).pipe(
      tap((dato) => {
        this.authSub.next(dato);
        localStorage.setItem('data', JSON.stringify(dato));
      })
    );
  }

  logOut() {
    this.authSub.next(null);
    localStorage.removeItem('data');
    this.router.navigate(['/login']);
  }
}
