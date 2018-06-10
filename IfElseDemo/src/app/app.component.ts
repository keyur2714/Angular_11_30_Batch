import { Component,ElementRef,TemplateRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'If Else Demo';

  age: number  = 16;

  result : string = "";

  @ViewChild("percentage")
  percentage : ElementRef;

  @ViewChild("ageElseBlock")
  ageElseBlock : TemplateRef<any>;

  calculateGrade(){
    console.log(this.ageElseBlock);
    console.log(this.percentage);
    console.log(this.ageElseBlock.elementRef);
    let per = parseInt(this.percentage.nativeElement.value);
    if(per >= 70)
      this.result = "Distinction";
    else if(per >= 60)
      this.result = "First";
    else if(per >= 50)
      this.result = "Second"
    else if(per >= 40)
      this.result = "Pass";
    else
      this.result = "FAIL";    
  }
}
