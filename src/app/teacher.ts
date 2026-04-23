import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Teacher {
  id: number;
  employeeId: string;
  firstName: string;
  lastName: string; 
  gender: string;
  dob: string;
  phone: string;
  email: string;

  qualification: string;
  experience: string;
  subject: string;
  joiningDate: string;
  salary: string;

  currentAddress: string;
  permanentAddress: string;

  teacherImage?: string | null; // optional
  documentName?: string; // optional
  documentFile?: string | null; // optional
}

@Injectable({
  providedIn: 'root',
})
export class TeacherService {

  private teachersSubject = new BehaviorSubject<Teacher[]>([]);
  teachers$ = this.teachersSubject.asObservable();

  private teachers: Teacher[] = [];

  constructor() {
    this.loadFromLocalStorage(); // 👈 load on start
  }

  // ✅ ADD TEACHER
  addTeacher(teacher: Teacher) {
    const newTeacher: Teacher = {
      ...teacher,
      id: Date.now()
    };

    this.teachers.push(newTeacher);

    this.saveToLocalStorage();        // 👈 save
    this.teachersSubject.next(this.teachers); // 👈 update UI
  }

  // ✅ SAVE TO LOCAL STORAGE
  private saveToLocalStorage() {
    localStorage.setItem('teachers', JSON.stringify(this.teachers));
  }

  // ✅ LOAD FROM LOCAL STORAGE
  private loadFromLocalStorage() {
    const data = localStorage.getItem('teachers');

    if (data) {
      this.teachers = JSON.parse(data);
      this.teachersSubject.next(this.teachers); // 👈 send to dashboard
    }
  }

  // (optional) clear data
  clearTeachers() {
    localStorage.removeItem('teachers');
    this.teachers = [];
    this.teachersSubject.next([]);
  }
}