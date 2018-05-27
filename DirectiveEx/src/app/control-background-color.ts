import { Directive,ElementRef,AfterViewInit } from '@angular/core'; 
@Directive(
    {
        selector : '[backColor]'
    }
)
export class ControlBackGroundColor implements AfterViewInit{

    constructor(private elRef: ElementRef){}

    ngAfterViewInit(){
        console.log(this.elRef.nativeElement.value);
        this.elRef.nativeElement.style.color = 'blue';            
    }

}