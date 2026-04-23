import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
  
})
export class Register {
  firstname: string = '';
    lastname: string = '';
    username: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';

  constructor(private route: Router) {}
  registerUser() {
    
  // ✅ 1. Required fields
  if (!this.firstname || !this.lastname || !this.username || !this.email || !this.password || !this.confirmPassword) {
    alert('All fields are required!');
    return;
  }

  // ✅ 2. Name validation (only letters)
  const nameRegex = /^[A-Za-z]{3,}$/;

  if (!nameRegex.test(this.firstname)) {
    alert('First name must be at least 3 letters and contain only alphabets');
    return;
  }

  if (!nameRegex.test(this.lastname)) {
    alert('Last name must be at least 3 letters and contain only alphabets');
    return;
  }

  // ✅ 3. Username validation
  if (this.username.length < 4) {
    alert('Username must be at least 4 characters');
    return;
  }

  // ✅ 4. Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(this.email)) {
    alert('Enter a valid email address');
    return;
  }

  // ✅ 5. Password validation (strong password)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

  if (!passwordRegex.test(this.password)) {
    alert('Password must be at least 6 characters and include letters and numbers');
    return;
  }

  // ✅ 6. Confirm password match
  if (this.password !== this.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // ✅ 7. Check existing user
  const existingUser = JSON.parse(localStorage.getItem('user') || 'null');

  if (existingUser && existingUser.email === this.email) {
    alert('User already exists with this email');
    return;
  }

  // ✅ 8. Save user
  const user = {
    firstname: this.firstname,
    lastname: this.lastname,
    username: this.username,
    email: this.email,
    password: this.password
  };

  localStorage.setItem('user', JSON.stringify(user));

  alert('Registration successful!');
  this.route.navigate(['/login']);
}
}

