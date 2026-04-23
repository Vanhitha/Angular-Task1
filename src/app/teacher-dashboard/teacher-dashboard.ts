import { Component } from '@angular/core';
import { Teacher, TeacherService } from '../teacher';
@Component({
  selector: 'app-teacher-dashboard',
  standalone: false,
  templateUrl: './teacher-dashboard.html',
  styleUrl: './teacher-dashboard.css',
})
export class TeacherDashboard {
   teachers: Teacher[] = [];
  selectedTeacher: Teacher | null = null;

  constructor(private teacherServices: TeacherService) {}

  ngOnInit() {
    this.teacherServices.teachers$.subscribe(data => {
      this.teachers = data;
    });
  }

  selectTeacher(t: Teacher) {
    this.selectedTeacher = t;
  }
}
