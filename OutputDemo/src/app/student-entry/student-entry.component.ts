import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  @Output("getStudentName")
  getNewStudentName = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  addStudent(name){
    console.log("1: "+name);
    this.getNewStudentName.emit(name);
  }
}
