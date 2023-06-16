import { Pipe, PipeTransform } from '@angular/core';
import { formatterMoney } from 'src/app/helpers';

@Pipe({
  name: 'formatMoney'
})
export class FormatMoneyPipe implements PipeTransform {

  transform(money: number, localMoney: string, currency: string): unknown {
    return formatterMoney(money, localMoney, currency);
  }

}
