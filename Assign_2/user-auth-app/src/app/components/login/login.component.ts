import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <input [(ngModel)]="email" name="email" placeholder="Email" required />
      <input
        [(ngModel)]="password"
        name="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.auth.login(this.email, this.password)) {
      localStorage.setItem('currentUser', this.email);
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid credentials');
    }
  }
}
