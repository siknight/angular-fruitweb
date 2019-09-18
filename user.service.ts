import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }
  isAuthenticated(): Observable<string> {  // 授权
    // return this.http.get<string>('http://localhost:8095/users/authenticated');
    return this.http.get<string>('https://fruit-user-si-exhausted-tiger.cfapps.io//users/authenticated');
  }

  login(user: User): Observable<string> {
    return this.http.post<string>('https://fruit-user-si-exhausted-tiger.cfapps.io//users/login', user);
  }

  loginout() {  // jwt
    return this.http.post('https://fruit-user-si-exhausted-tiger.cfapps.io//users/loginOut', {});
  }
}
