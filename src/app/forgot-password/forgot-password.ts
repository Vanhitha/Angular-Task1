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
  if (this.newPassword !== this.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const userJson = localStorage.getItem('user');
  if (!userJson) {
    alert('Email not found!');
    return;
  }

  const storedUser = JSON.parse(userJson);

  if (storedUser && storedUser.email === this.email) {
    storedUser.password = this.newPassword;

    localStorage.setItem('user', JSON.stringify(storedUser));

    alert('Password reset successful!');
    this.route.navigate(['/login']);
  } else {
    alert('Email not found!');
  }
}
}
