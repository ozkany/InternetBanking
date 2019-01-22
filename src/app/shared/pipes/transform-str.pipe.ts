import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformStr'
})
export class TransformStr implements PipeTransform {

  transform(value: string, type: string): string {
    let newStr: string = "";
    if(type == "cardimg") {
        return value.replace("80","82").replace("81","83");
    }
    return value;
  }

}