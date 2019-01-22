import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, format: string): any {
    try {
      return value.toLocaleDateString();
    } catch (ex) {
      return value;
    }
    
  }

}
