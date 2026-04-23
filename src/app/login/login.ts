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

  // ✅ 1. Required field validation FIRST
  if (!this.email && !this.password) {
    alert('Please enter email and password');
    return;
  }

  if (!this.email) {
    alert('Email is required');
    return;
  }

  if (!this.password) {
    alert('Password is required');
    return;
  }

  // ✅ 2. Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(this.email)) {
    alert('Please enter a valid email address');
    return;
  }

  // ✅ 3. Get stored user safely
  const storedUser = JSON.parse(localStorage.getItem('user') || 'null');

  if (!storedUser) {
    alert('No registered user found. Please register first.');
    return;
  }

  // ✅ 4. Credential check
  if (
    this.email === storedUser.email &&
    this.password === storedUser.password
  ) {
    console.log('Login successful');
    this.router.navigate(['/home']);
  } else {
    alert('Invalid email or password');
  }
}
}

