import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user: any) => {
      this.user = user;
    });
  }

  isMenuOpen = false;

  /* 🔥 ADD THIS */
  @Output() menuToggle = new EventEmitter<boolean>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    /* 🔥 SEND STATE TO HOME */
    this.menuToggle.emit(this.isMenuOpen);
  }
}