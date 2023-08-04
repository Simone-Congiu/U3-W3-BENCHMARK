import { IRes } from './../../res';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IApiInterface } from 'src/app/api-interface';

import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cityName!: string;
  array!: IRes[];

  constructor(private serviceSvc: ServiceService, private http: HttpClient) {}

  getCitta(cityName: string) {
    this.serviceSvc.getCity(cityName).subscribe((res) => console.log(res));
  }
}
