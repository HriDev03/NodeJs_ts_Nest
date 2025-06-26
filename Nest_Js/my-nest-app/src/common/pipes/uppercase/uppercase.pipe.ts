import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    //is pipe ka kaam hogaki yeh data ko transform karega
    if(typeof value === 'string'){
      //data ko transform karkecontroller pe bheje ga 
      return value.toUpperCase();
    }
    return value;
  }
}
