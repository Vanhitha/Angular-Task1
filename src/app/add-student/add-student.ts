import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
   studentForm: FormGroup;

  studentImage: any;
  filePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {

    this.studentForm = this.fb.group({

     
      academicYear: [''],
      admissionNumber: [''],
      admissionDate: [''],
      rollNumber: [''],
      status: [''],
      firstName: [''],
      lastName: [''],
      class: [''],
      section: [''],
      gender: [''],
      dob: [''],
      bloodGroup: [''],
      religion: [''],
      category: [''],
      primaryContact: [''],
      email: [''],

      
      fatherName: [''],
      fatherEmail: [''],
      fatherPhone: [''],
      fatherOccupation: [''],

      motherName: [''],
      motherEmail: [''],
      motherPhone: [''],
      motherOccupation: [''],

      
      guardianName: [''],
      guardianRelation: [''],
      guardianPhone: [''],
      guardianEmail: [''],

   
      sibling: ['No'],

      
      currentAddress: [''],
      permanentAddress: [''],

      
      transportEnabled: [false],

      
      hostelEnabled: [false],

   
      documents: [''],


      medicalCondition: ['Good'],
      allergies: [[]],
      medications: [[]],

      
      previousSchoolName: [''],
      previousSchoolAddress: [''],

      
      bankName: [''],
      branch: [''],
      ifsc: [''],
      otherInfo: ['']
    });
  }

 
  onSubmit() {
    console.log('Form Data:', this.studentForm.value);
  }

  
  resetForm() {
    this.studentForm.reset();
  }


  onStudentImage(event: any) {
    this.studentImage = event.target.files[0];
  }

 
selectedFile: File | null = null;

onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile = file;
  }
}
onFileSelected1(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile = file;
  }
}
onFileSelected2(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile = file;
  }
}
onFileSelected3(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile = file;
  }
}

uploadStudentImage() {
  if (!this.selectedFile) {
    console.log('No file selected');
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    this.studentImage = reader.result; // this updates preview
  };

  reader.readAsDataURL(this.selectedFile);
}

removeStudentImage() {
  this.studentImage = null;
  this.selectedFile = null;
}

  

  
  toggleTransport(event: any) {
    this.studentForm.patchValue({
      transportEnabled: event.target.checked
    });
  }

  toggleHostel(event: any) {
    this.studentForm.patchValue({
      hostelEnabled: event.target.checked
    });
  }

  
  addAllergy(item: string) {
    let list = this.studentForm.value.allergies || [];
    if (!list.includes(item)) {
      list.push(item);
      this.studentForm.patchValue({ allergies: list });
    }
  }

  addMedication(item: string) {
    let list = this.studentForm.value.medications || [];
    if (!list.includes(item)) {
      list.push(item);
      this.studentForm.patchValue({ medications: list });
    }
  }

  addSiblingRow() {
    console.log('Add sibling row');
  }

  removeSiblingRow() {
    console.log('Remove sibling row');
  }

  
  uploadDocument() {
    console.log('Upload document triggered');
  }
}

