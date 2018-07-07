import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Observable Demo';
  generatedNumber : number = 0;

  empList = [
    {
    "empId":10,
    "name":"keyur"
    },
    {
    "empId":20,
    "name":"denish"
    },
    {
    "empId":30,
    "name":"vinit"
    }
];

  ngOnInit(){
    const numbers = Observable.interval(1000);
    numbers.subscribe((number)=>{
     console.log(number);  
     this.generatedNumber = number;
    })

    const empObservable = Observable.of(this.empList);
    empObservable.map((empList)=>{
      for(let emp of empList){
         emp.name = emp.name.toUpperCase();
      }
    })
    empObservable.subscribe(
      (employeeList)=>{
        console.log(employeeList);
        for(let emp of employeeList){
         console.log(emp.name);
        }
      },
      (error)=>{

      }      
    )    
  }
}
