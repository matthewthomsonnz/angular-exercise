import { Component, OnInit } from '@angular/core';
import { ListingService, Listing } from '../listing.service';
import { TimeSinceListedPipe } from '../pipes/time-since-listed.pipe';
 
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html'
})

export class ListingsComponent implements OnInit{
  constructor(private listingService: ListingService) {}
  title = "Angular exercise";
  listings: Listing[];
  selectedListing: Listing;
  results = '';
  initialViewChecked = false;

  onSelect(listing: Listing): void {
    let body = document.getElementsByTagName("body")[0];
    if(this.selectedListing == undefined) {
      this.selectedListing = listing;
      body.classList.add("modal-open");
    }
    else {
      this.selectedListing = listing;
      body.classList.remove("modal-open");
    }
  }

  ngOnInit() {
    function getListings(){
      var request = new XMLHttpRequest();
      request.open('GET', 'https://jsonp.afeld.me/?url=https://jobs.github.com/positions.json', true);
      request.onload = function() {
          componentScope.listings = JSON.parse(request.responseText).sort(function(a,b){
            return +new Date(b.created_at) - +new Date(a.created_at);
          });
          loader[0].parentNode.removeChild(loader[0]);

      };
      request.onerror = () => countdown321();
      request.send();
    };
    getListings();

    var componentScope = this;
    let retryMsg = document.getElementById("try-again-countdown");
    let loader = document.getElementsByClassName("loader") as HTMLCollectionOf<HTMLElement>; 
    var iteration = 3;
    var oneSecondInterval;
    function countdown321() {
        oneSecondInterval = setInterval(function(){ currentTimerStatus() }, 1000);
    }

    function currentTimerStatus() {
      retryMsg.innerHTML = "Couldn't connect, let's try again in "+ iteration +"...";
      loader[0].style.display = 'none';
      iteration--;
      if (iteration == -1) {
        retryMsg.innerHTML = "";
         loader[0].style.display = "";
          clearInterval(oneSecondInterval);
          iteration = 3;
          getListings();
      }
    }
  }

  ngAfterViewChecked()	{
    var listingCollection = document.getElementsByClassName('col-xs-12') as HTMLCollectionOf<HTMLElement>;
    if (this.initialViewChecked === false) {
      Array.from(listingCollection).forEach((elem, i, elements) => {
        elem.style.transitionDelay = i*50 + "ms";
        setTimeout(()=>elem.style.transform = "rotateX(0deg)",100);
        if (i == 49) this.initialViewChecked = true;
      });
 }
  }

}