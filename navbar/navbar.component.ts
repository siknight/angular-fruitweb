import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private service: UserService,  private router: Router) { }
  ngOnInit() {
    this.service.isAuthenticated().subscribe(data => {
      console.log('呵呵 ' + data );
      if (data == null) {
        document.getElementById('login').innerHTML =  '登录';
      } else {
          document.getElementById('login').innerHTML =  data.toString() + '在线 ';
      }
    });
}


loginout() {
    this.service.loginout().subscribe(data => {
      console.log('呵呵 2' + data );
      document.getElementById('login').innerHTML = '登录' ;
      document.getElementById('loginout').innerHTML = '' ;
    });
}


}
