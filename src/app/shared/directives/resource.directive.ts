import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { CommonStore } from '@core/store/common/common.store';

@Directive({
  selector: '[appResource]'
})

export class ResourceDirective {

  @Input() set appResource(resourceCode: string) {
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.commonStore.getResource(resourceCode));
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private commonStore: CommonStore) { }
}
