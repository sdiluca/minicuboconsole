import { Pipe, PipeTransform } from '@angular/core';
import { Wifi } from './wifinetwork';

@Pipe({
  name: 'sortByStrenght'
})
export class SortByStrenghtPipe implements PipeTransform {

  transform(value: Wifi[]): Wifi[] {
    if (value){
      return value.sort((a: Wifi, b: Wifi) =>{
        return b.signalStrength-a.signalStrength
      })
    }
    return [];
  }
}
