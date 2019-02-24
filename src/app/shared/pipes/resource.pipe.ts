import { Pipe, PipeTransform } from '@angular/core';
import { CommonStore } from 'src/app/_core/store/common/common.store';

@Pipe({
  name: 'res'
})
export class ResourcePipe implements PipeTransform {

  constructor(private commonStore: CommonStore) { }

  transform(resourceCode: string): any {
        
    return this.commonStore.getResource(resourceCode);

  }
}
