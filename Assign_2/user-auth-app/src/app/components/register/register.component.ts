import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="register()">
      <input [(ngModel)]="name" name="name" placeholder="Name" required />
      <input [(ngModel)]="email" name="email" placeholder="Email" required />
      <input
        [(ngModel)]="password"
        name="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  `,
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.auth.register(user);
    alert('Registered successfully!');
    this.router.navigate(['/login']);
  }
}
