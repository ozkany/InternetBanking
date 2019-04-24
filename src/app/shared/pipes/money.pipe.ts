import { Pipe, PipeTransform } from '@angular/core';
import { formatNumber, formatCurrency } from '@angular/common';
import { CommonStore } from '@core/store/common/common.store';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  constructor(private commonStore: CommonStore) { }

  format = '1.2-4';

  transform(value: number, currency: string = ''): any {
    try {
      let formattedValue = formatNumber(value, this.commonStore.localeNgId, this.format);

      if (currency !== '') {
        formattedValue += ` ${currency}`;
      }

      return formattedValue;
    } catch (ex) { return value.toString(); }
  }
}
