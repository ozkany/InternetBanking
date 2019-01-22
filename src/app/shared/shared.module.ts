import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ShortenStr } from './pipes/shorten-str.pipe';
import { TransformStr } from './pipes/transform-str.pipe';
import { BypassImgResSecurity } from './pipes/bypass-img-res-security.pipe';

@NgModule({
  declarations: [
    DateFormatPipe,
    ShortenStr,
    TransformStr,
    BypassImgResSecurity
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateFormatPipe,
    ShortenStr,
    TransformStr,
    BypassImgResSecurity
  ]
})
export class SharedModule { }
