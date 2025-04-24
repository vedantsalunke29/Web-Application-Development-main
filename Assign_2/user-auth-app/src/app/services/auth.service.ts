import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  register(user: any) {
    localStorage.setItem(user.email, JSON.stringify(user));
    return true;
  }

  login(email: string, password: string): boolean {
    const storedUser = JSON.parse(localStorage.getItem(email)!);
    return storedUser && storedUser.password === password;
  }

  getUser(email: string) {
    return JSON.parse(localStorage.getItem(email)!);
  }
}
