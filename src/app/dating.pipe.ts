import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dating'
})
export class DatingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
