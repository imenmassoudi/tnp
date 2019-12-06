import { Injectable } from '@angular/core';
import {User} from '../User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User[];
  user1 = new User();
  constructor() {
    this.user1.fix(1, 'imen', '1234', 'Imen', 'Massoudi');
    this.user = [this.user1];
  }
  verifUser(user: string, password: string): boolean {
    let i = 0;
    while (this.user[i].username !== user && this.user[i].password !== password) {
      i++;
    }
    if (this.user[i].username === user && this.user[i].password === password) {
      return true;
    } else {
      return false;
    }
  }
}
