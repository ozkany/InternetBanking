import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ShortenStr } from './pipes/shorten-str.pipe';
import { TransformStr } from './pipes/transform-str.pipe';
import { BypassImgResSecurity } from './pipes/bypass-img-res-security.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountsComboControl } from './controls/accounts-combo/accounts-combo.control';

@NgModule({
  declarations: [
    DateFormatPipe,
    ShortenStr,
    TransformStr,
    BypassImgResSecurity,
    AccountsComboControl
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DateFormatPipe,
    ShortenStr,
    TransformStr,
    BypassImgResSecurity,
    AccountsComboControl
  ]
})
export class SharedModule { }