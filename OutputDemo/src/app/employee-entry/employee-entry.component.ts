import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Employee } from './employee-model';
import { Department } from './department-model';
@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent implements OnInit {

  employee: Employee = new Employee();

  deptList: Department[] = [
    {
      "id":10,
      "name":"IT"
    },
    {
      "id":20,
      "name":"Sales"
    },
    {
      "id":30,
      "name":"Accounts"
    }
  ];

  @Output()
  getNewEmployee = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {
  }

  add(){
    console.log(this.employee);
    console.log(this.employee.deptId);
    this.getNewEmployee.emit(this.employee);
  }
}
