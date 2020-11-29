import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({ name: 'ibanFormat' })
export class IbanPipe implements PipeTransform {
  transform(iban: string, ...args: any[]): string {
    return iban.substring(0, 4) + '...' + iban.substring(iban.length - 6, iban.length);
  }

}
