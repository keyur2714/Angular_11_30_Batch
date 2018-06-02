import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormArray, FormBuilder } from '@angular/forms';
import { Student } from './student-model';
@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  student : Student = new Student();
  isSubmitted = false;
  namePattern = "^[a-z0-9_-]{8,15}$";
  studentDetailForm = new FormGroup(
    {
      name : new FormControl('keyur',[Validators.required,Validators.minLength(3),Validators.pattern(this.namePattern)]),
      age: new FormControl(30,Validators.required),      
      address: this.fb.group({ // <-- the child FormGroup
        city: new FormControl('',Validators.required),
        mobileNo: new FormControl('',Validators.required)
      }),
      hobbies: new FormArray([])            
    }
  );

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    (<FormArray>this.studentDetailForm.get('hobbies')).push(new FormControl());    
  }

  save(){
    console.log(this.studentDetailForm);
    console.log(this.studentDetailForm.controls["address"].get("city").value);
    console.log(this.studentDetailForm.value);
    console.log(this.student.name+" "+this.student.city+" "+this.student.age+" "+this.student.mobileNo+" "+this.student.hobbies);
    this.isSubmitted = true;
  }

  addHobby(){    
    let hobbyControl = new FormControl();
    (<FormArray>this.studentDetailForm.get('hobbies')).push(hobbyControl);
  }
}
