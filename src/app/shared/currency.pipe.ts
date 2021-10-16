import { Inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cCurrency',
  pure: true
})
export class CurrencyPipe implements PipeTransform {

   transform(amount:any): string | undefined {
    if (!amount || (amount.value === undefined)) {
      return undefined;
    }
    let currency = amount.countryCode === "USD" ? "$" : "Can$"
    return currency + amount.value;
   }
}