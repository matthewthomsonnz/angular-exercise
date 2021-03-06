import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timeSinceListed'})

export class TimeSinceListedPipe implements PipeTransform {

  transform(value: string, args: string[]): any {
    var d = new Date().getTime();
    var d2 = new Date(value).getTime();
    var diff = +new Date(d-d2);
    var daysAgo = Math.round(diff/86400000);
    var plural = "";

    if (!value) return value;
    if (daysAgo == 0) {
      return plural = "today";
    } 
    else if (daysAgo == 1) {
      return plural = "yesterday";
    }
    else {
      return plural = daysAgo + " days ago";
    }
  }
}