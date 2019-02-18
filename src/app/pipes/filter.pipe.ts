import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(listings: any, term?: any): any {
    if (term === undefined) {
      return listings;
    }
    else {
      return listings.filter(listing => {
        return listing.title.toLowerCase().includes(term.toLowerCase());
      });
    }
  }
}