import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  constructor(private route:Router){}
  newPassword="";
  confirmPassword="";
  email="";
  forgotPassword() {

  // ✅ 1. Required field validation
  if (!this.email || !this.newPassword || !this.confirmPassword) {
    alert('All fields are required!');
    return;
  }

  // ✅ 2. Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(this.email)) {
    alert('Please enter a valid email address');
    return;
  }

  // ✅ 3. Password strength validation
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

  if (!passwordRegex.test(this.newPassword)) {
    alert('Password must be at least 6 characters and include letters and numbers');
    return;
  }

  // ✅ 4. Confirm password check
  if (this.newPassword !== this.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // ✅ 5. Get stored user safely
  const userJson = localStorage.getItem('user');

  if (!userJson) {
    alert('No registered user found!');
    return;
  }

  const storedUser = JSON.parse(userJson);

  // ✅ 6. Email match check
  if (storedUser.email !== this.email) {
    alert('Email not found!');
    return;
  }

  // ✅ 7. Update password
  storedUser.password = this.newPassword;

  localStorage.setItem('user', JSON.stringify(storedUser));

  alert('Password reset successful!');
  this.route.navigate(['/login']);
}
}
