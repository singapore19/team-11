import { Component, OnInit } from '@angular/core';
import { LoginService } from '../util/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin = true;

  constructor(private loginService: LoginService,) { }

  ngOnInit() {
  }

  toggleIsLogin() {
    this.isLogin = !this.isLogin;
  }

  submitLogin() {
    this.loginService.login = true;
  }

}
