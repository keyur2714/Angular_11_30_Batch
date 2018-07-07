import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateString'
})
export class FormateStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value+" "+args);
    value = value.replace(' ',args);
    return value;
  }

}
