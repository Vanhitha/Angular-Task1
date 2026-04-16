//user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

 private userSubject = new BehaviorSubject(this.getUserFromStorage());
  user$ = this.userSubject.asObservable();

  getUserFromStorage() {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : {};
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user); // 🔥 notify all components
  }
}
// import { BehaviorSubject } from 'rxjs';
// import { isPlatformBrowser } from '@angular/common';
// import { PLATFORM_ID,Inject} from '@angular/core';
// import { Injectable } from '@angular/core';


// @Injectable({ providedIn: 'root' })
// export class UserService {

//   private userSubject: BehaviorSubject<any>;
//   user$;

//   constructor(@Inject(PLATFORM_ID) private platformId: object) {

//     // ✅ SAFE initialization
//     const user = this.getUserFromStorage();
//     this.userSubject = new BehaviorSubject(user);
//     this.user$ = this.userSubject.asObservable();
//   }

//   getUserFromStorage() {
//     if (isPlatformBrowser(this.platformId)) {
//       const data = localStorage.getItem('user');
//       return data ? JSON.parse(data) : {};
//     }
//     return {};
//   }

//   setUser(user: any) {
//     if (isPlatformBrowser(this.platformId)) {
//       localStorage.setItem('user', JSON.stringify(user));
//     }
//     this.userSubject.next(user);
//   }
// }