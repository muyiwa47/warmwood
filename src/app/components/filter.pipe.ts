import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(channelObject: any, myfilter: any): any {
    if (myfilter === undefined || myfilter === 'all'){
      return channelObject;
    }
    return channelObject.filter(function(channel){
       return channel.category.includes(myfilter.toLowerCase());
    })
  }

}
