import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'firebase/auth';
import { switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinronService {

  constructor(public authService: AuthService, public http: HttpClient) {
    // this.authService.g
  }


  getHello() {
    return this.authService.getToken().pipe(
      switchMap(token => this.http.get('http://localhost:4000/hello/test', {headers: {
      'Authorization': `Bearer ${token}`
    }})),
      tap(r => console.log(r))
    )
  }

  addExchangeConfig(secret: string, api: string) {
    return this.authService.getToken().pipe(
      switchMap(token => this.http.post('http://localhost:4000/user-settings', {
        apiKey: api,
        secret,
        exchange: 'Coinbase'
      }, {headers: {
      'Authorization': `Bearer ${token}`
    }})),
      tap(r => console.log(r))
    )
  }
}
//AQHoN02BYwbZEVL5VgmUhQhc44S2
