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
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

  if (
    this.email === storedUser.email &&
    this.password === storedUser.password
  ) {
    console.log('Login successful');
    this.router.navigate(['/home']);
  } else if (this.email === '' || this.password === '') {
    alert('Please enter both email and password');
  }
  else {
    console.log('Invalid credentials');
    alert('Email or password is incorrect');
  }
}
}

