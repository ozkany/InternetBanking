import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  constructor() { }

  transform(value: Date, format: string): any {
    try {
      const date = new Date(value);
      const formatted = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
      return formatted;
    } catch (ex) { return value; }
  }
}
