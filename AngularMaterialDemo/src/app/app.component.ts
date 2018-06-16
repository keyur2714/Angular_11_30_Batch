import { Component,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material Components Demo';
  @ViewChild(MatPaginator) 
  paginator: MatPaginator;  
  displayedColumns = ["id","deptName"];
  selectedDepartment = {
      "id":20,
      "deptName":"Sales"
    };
  departments = [
    {
      "id":10,
      "deptName":"IT"
    },
    {
      "id":20,
      "deptName":"Sales"
    },
    {
      "id":30,
      "deptName":"Hr"
    }
  ];
  dataSource = new MatTableDataSource(this.departments);
  

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  search(filterValue: string){
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
