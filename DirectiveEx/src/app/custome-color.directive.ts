import { Directive, AfterViewInit, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appCustomeColor]'
})
export class CustomeColorDirective implements AfterViewInit{

  @Input()
  color:string = "orange";

  @Input()
  fontSize:string = "25px";

  constructor(private elementRef : ElementRef) { }

  ngAfterViewInit(){
    console.log("After View Iniit...");
    console.log("ElementRef::: "+this.elementRef);
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }


}
