import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
@Component({
  selector: 'app-student-dashboard',
  standalone: false,
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.css',
})
export class StudentDashboard implements OnInit {
  students: any[] = [];
selectedStudent: any = null;
selectedIndex: number | null = null;

constructor(private studentService: Student) {}

ngOnInit() {
  this.studentService.loadStudents();

  this.studentService.students$.subscribe(data => {
    this.students = data;
  });
}
viewStudent(student: any, index: number) {
  this.selectedStudent = student;
  this.selectedIndex = index;
}

backToList() {
  this.selectedStudent = null;
  this.selectedIndex = null;
}


}
