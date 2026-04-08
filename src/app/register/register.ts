import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
  
})
export class Register {
  fullname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private route:Router) {}

  registerUser() {
    if (!this.fullname || !this.email || !this.password || !this.confirmPassword) {
      alert('All fields are required!');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }


    const user = {
      fullname: this.fullname,
      email: this.email,
      password: this.password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful! You can now login.');
    this.route.navigate(['/login']); // redirect to login page
  }
}

