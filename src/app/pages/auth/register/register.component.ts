import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IRegister } from '../interfaces/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: IRegister = {
    nome: '',
    cognome: '',
    email: '',
    password: '',
  };

  constructor(private authSvc: AuthService) {}

  registrati() {
    this.authSvc
      .register(this.form)
      .subscribe((res) => console.log('registrato'));
  }
}
