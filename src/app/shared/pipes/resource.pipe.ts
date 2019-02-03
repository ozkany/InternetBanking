import { Pipe, PipeTransform } from '@angular/core';
import { ResourceStore } from 'src/app/_core/stores/resource.store';

@Pipe({
  name: 'res'
})
export class ResourcePipe implements PipeTransform {

  constructor(private resourceStore: ResourceStore) { }

  transform(resourceCode: string): any {
        
    return this.resourceStore.getResource(resourceCode);

  }
}
