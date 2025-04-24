import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  template: `
    <h2>User Profile</h2>
    <p *ngIf="user">
      <strong>Name:</strong> {{ user.name }} <br />
      <strong>Email:</strong> {{ user.email }}
    </p>
  `,
})
export class ProfileComponent implements OnInit {
  user: any = null;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    const email = localStorage.getItem('currentUser')!;
    this.user = this.auth.getUser(email);
  }
}
