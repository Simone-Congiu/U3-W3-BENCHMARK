import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ILogin } from '../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  data: ILogin = {
    email: '',
    password: '',
  };
  constructor(private authSvC: AuthService, private router: Router) {}

  accedi() {
    this.authSvC.login(this.data).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
