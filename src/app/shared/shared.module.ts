import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ShortenStr } from './pipes/shorten-str.pipe';
import { TransformStr } from './pipes/transform-str.pipe';
import { BypassImgResSecurity } from './pipes/bypass-img-res-security.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComboComponent } from './controls/account-combo/account-combo.component';
import { ResourcePipe } from './pipes/resource.pipe';

@NgModule({
  declarations: [
    DateFormatPipe,
    ResourcePipe,
    ShortenStr,
    TransformStr,
    BypassImgResSecurity,
    AccountComboComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DateFormatPipe,
    ResourcePipe,
    ShortenStr,
    TransformStr,
    BypassImgResSecurity,
    AccountComboComponent
  ]
})
export class SharedModule { }
