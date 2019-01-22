import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ 
    name: 'bypassImgResSecurity' 
})
export class BypassImgResSecurity implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }

    transform(value: string): SafeHtml {

        if (value != "") {
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }

        return null;
    }
}