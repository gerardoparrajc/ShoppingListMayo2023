import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'potenciaDos'
})
export class PotenciaDosPipe implements PipeTransform {

  transform(base: number, ...args: unknown[]): number {
    return Math.pow(base, 2);
  }

}
