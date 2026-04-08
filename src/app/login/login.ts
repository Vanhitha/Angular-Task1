import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  loginUser() {
    // Normally here you would call an API to check credentials
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // For now, route to home page
    this.router.navigate(['/home']);
  }
}

