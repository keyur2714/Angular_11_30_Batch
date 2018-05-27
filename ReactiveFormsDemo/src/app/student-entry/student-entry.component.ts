import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Student } from './student-model';
@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  student : Student = new Student()

  studentDetailForm = new FormGroup(
    {
      name : new FormControl('keyur',[Validators.required,Validators.minLength(3)]),
      age: new FormControl(30,Validators.required),
      city: new FormControl('',Validators.required),
      mobileNo: new FormControl('',Validators.required),
      hobby: new FormControl()     
    }
  );

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log(this.studentDetailForm);
    console.log(this.studentDetailForm.value);
    console.log(this.student.name+" "+this.student.city+" "+this.student.age+" "+this.student.mobileNo+" "+this.student.hobby);
  }
}
