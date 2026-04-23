import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Student {

  private students: any[] = [];

  private studentSubject = new BehaviorSubject<any[]>([]);
  students$ = this.studentSubject.asObservable();

  addStudent(student: any) {
    this.students.push(student);

    // update observable
    this.studentSubject.next(this.students);

    // persist in localStorage
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  loadStudents() {
    const data = localStorage.getItem('students');
    if (data) {
      this.students = JSON.parse(data);
      this.studentSubject.next(this.students);
    }
  }

  getStudents() {
    return this.students;
  }

  getStudentByIndex(index: number) {
    return this.students[index];
  }
}