import { Component, OnInit } from '@angular/core';

import { ListingService, Listing } from '../listing.service';
import { TimeSinceListedPipe } from '../pipes/time-since-listed.pipe'; 

// declare jQuery
declare var $:any;

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html'
})

export class ListingsComponent implements OnInit {
  
  title = "Countdown angular exercise";
  listings: Listing[];
  selectedListing: Listing;

  constructor(private listingService: ListingService) { }

  // Job listing toggle is clicked
  onSelect(listing: Listing): void {

    // If modal isn't open, open modal with clicked listing. Add no-scroll bootstrap class to body.
    if(this.selectedListing == undefined) {
      this.selectedListing = listing;
      $("body").addClass("modal-open");
    }
    // If modal is open, close modal. Remove no-scroll bootstrap class from body.
    else {
      this.selectedListing = listing;
      $("body").removeClass("modal-open");
    }
  }

  ngOnInit() {
    // ListingsComponent scope for the getListings function
    var componentScope = this;
    // immediately self-invoke request
    function getListings(){
      $.ajax({
        url: 'https://jobs.github.com/positions.json',
        dataType: 'jsonp',
        success: function(data){
          
          // transition preloader out, then remove from DOM
          $(".loader").animate({opacity: 0, width: 0}).delay(2000, function(){$(this).remove()});

          // push returned job objects into the listings array
          componentScope.listings = data;

          // listing cascade transition in
          setTimeout(function(){
            $(".col-xs-12").each(function(index) {

              // Hack to use jQuery .animate on non-numeric CSS property
              $(this).delay(60*index).animate({  textIndent: 0 }, {
                step: function(now,fx) {
                  $(this).css('transform','rotateX('+'0'+'deg)');
                },
                duration:'slow'
              },'linear');
            }
            , 50);
          });
        }
      })
      .fail(function() {
        countdown321();
      });
    }
    getListings();

    // countdown retry set to start from three
    var iteration = 3;

    // fire myTimer function every second
    var oneSecondInterval;
    function countdown321() {
        oneSecondInterval = setInterval(function(){ myTimer() }, 1000);
    }

    // hide preloader, start from 3, countdown one each time, show preloader, reset timer, re-run AJAX
    function myTimer() {
      $('#try-again-countdown').html("Couldn't connect, let's try again in "+iteration+"...");
      $(".loader").hide();
      iteration--;
      if (iteration == -1) {
         $('#try-again-countdown').html("");
         $(".loader").show();
          clearInterval(oneSecondInterval);
          iteration = 3;
          getListings();
      }
    }
  }
}
