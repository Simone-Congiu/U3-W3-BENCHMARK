import { Injectable } from '@angular/core';
import { IApiInterface } from './api-interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  private key = 'db6b6527c31b6a1e26944c3fcb6d655f';
  private url = 'http://api.openweathermap.org/data/2.5/forecast';

  getCity(cityName: string) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${this.key}`;
    return this.http.get(url);
  }

  getweather() {
    this.http;
  }
}
