import { Component, OnInit } from '@angular/core';
import {User} from '../../User';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user: User;
 login: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router,
              private loginverif: FormBuilder) {
    this.login = this.loginverif.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
  }
  signin(username: string, password: string) {
    if (this.loginService.verifUser(username, password)) {
      this.router.navigateByUrl('/articles');
    }
    }
    get username() { return this.login.get('username'); }
    get password() {return this.login.get('password'); }
  }

