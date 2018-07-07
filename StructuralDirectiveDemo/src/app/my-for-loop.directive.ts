import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyForLoop]'
})
export class MyForLoopDirective {

  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { }

  @Input() set appMyForLoop(num : number){
    for(let i=1;i<=num;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
