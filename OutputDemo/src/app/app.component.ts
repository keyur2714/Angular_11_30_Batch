import { Component } from '@angular/core';
import { Employee } from './employee-entry/employee-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@Output Demo';
  studentNames = ["denish","vinit"];

  columnList = ["empId","name","age","salary","deptName"];
  columnHeaderList = ["Id","Name","Age","Salary","Department"];

  empList: Employee[] = [];

  getStudentName(name){
    console.log("2: "+ name);
    this.studentNames.push(name);
  }

  getEmployee(employee){
    this.empList.push(employee);
  }
}
