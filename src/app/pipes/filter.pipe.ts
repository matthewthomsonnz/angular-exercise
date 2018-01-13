import { Pipe, PipeTransform } from '@angular/core';

// declare jQuery
declare var $:any;

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(listings: any, term?: any): any {
    function flip() {
      setTimeout(function(){
        $(".col-xs-12").each(function(index) {
          $(this).delay(60*index).animate({  textIndent: 0 }, {
            step: function(now,fx) {
              $(this).css('transform','rotateX(0deg)');
            },
            duration:'slow'
          },'linear');
        })
      }, 50);
    };

    //check if search term is undefined
    if (term === undefined) return listings;
    
    // return updated array;
    else return listings.filter(function(listing){
      flip();
      var any = "1"
      return listing.title.toLowerCase().includes(term.toLowerCase());
    })
  }
}
