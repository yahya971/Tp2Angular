import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fontSize'
})
export class FontSizePipe implements PipeTransform {

  transform(value: any): any {
    return value + 'px';
  }

}
