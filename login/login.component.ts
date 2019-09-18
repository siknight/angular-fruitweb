import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {id: 0, name: '', pass: ''};
  flag: string;
  constructor(private service: UserService,  private router: Router) { }
  ngOnInit() {

  }
  login() {
    this.service.login(this.user).subscribe(data => {
       console.log(data);
       if (data.toString().match('true'))  {
         alert('恭喜你登录成功' + this.user.name);
         this.flag = data.toString();
         console.log(this.flag.toString());
         document.getElementById('login').innerHTML =   this.user.name + '在线 </a> ';
         this.router.navigateByUrl('/fruits');
       } else {
         alert('用户名或密码错误，请重新登录');
       }
    });
  }

}
