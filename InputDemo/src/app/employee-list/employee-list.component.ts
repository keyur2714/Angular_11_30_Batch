import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model'; 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayColumnList:string [] = ["Emp Id","Name","Dept","Designation"];

  columnList:string [] = ["id","name","deptId","designation"];

  employeeList: Employee[] = [];

  constructor() { }

  ngOnInit() {
    let employee1 = new Employee();
    employee1.id  = 27;
    employee1.name = "keyur";
    employee1.designation = "SE";
    employee1.salary = 12312;
    employee1.deptId = 10;

    let employee2 = new Employee();
    employee2.id  = 24;
    employee2.name = "denish";
    employee2.designation = "SE";
    employee2.salary = 12323;
    employee2.deptId = 10;

    let employee3 = new Employee();
    employee3.id  = 44;
    employee3.name = "vinit";
    employee3.designation = "MM";
    employee3.salary = 12322;
    employee3.deptId = 20;

    this.employeeList.push(employee1);
    this.employeeList.push(employee2);
    this.employeeList.push(employee3);
  }

}
