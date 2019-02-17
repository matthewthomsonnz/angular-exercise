import { Component, OnInit, AfterViewChecked, Directive, ElementRef, Renderer2, Input, ViewChild } from '@angular/core';

import { ListingService, Listing } from '../listing.service';
import { TimeSinceListedPipe } from '../pipes/time-since-listed.pipe';

import { HttpClient } from '@angular/common/http';
declare var $:any
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html'
})

export class ListingsComponent implements OnInit{
  title = "Countdown angular exercise";
  listings: Listing[];
  selectedListing: Listing;
  constructor(private listingService: ListingService, private http: HttpClient, private rd: Renderer2) { }
  results = '';
  initialViewChecked = false;
  // Job listing toggle is clicked
  onSelect(listing: Listing): void {
    let body = document.getElementsByTagName("body")[0];
    // If modal isn't open, open modal with clicked listing. Add no-scroll bootstrap class to body.
    if(this.selectedListing == undefined) {
      this.selectedListing = listing;
      body.classList.add("modal-open");
    }
    // If modal is open, close modal. Remove no-scroll bootstrap class from body.
    else {
      this.selectedListing = listing;
      body.classList.remove("modal-open");
    }
  }
  onChange(): void {

  }
  ngOnInit() {
      this.http.get('https://jobs.github.com/positions.json').subscribe(data => {
        
      });
 
    // ListingsComponent scope for the getListings function
    var componentScope = this;
    let retryMsg = document.getElementById("try-again-countdown");
    let loader =  (<HTMLInputElement> document.getElementsByClassName("loader")[0]);

    // immediately self-invoke request
    function getListings(){

      $.ajax({
        url: 'https://jsonp.afeld.me/?url=https://jobs.github.com/positions.json',
        dataType: 'json',
        success: function(data){
          
          loader.style.opacity = "0";
          setTimeout(() => {
            loader.parentNode.removeChild(loader);
          }, 2000);
          
          // returned job objects into listings array
          componentScope.listings = data;

           






              // $(".col-xs-12").each(function(index) {
  
              //   // Hack to use jQuery .animate on non-numeric CSS property
              //   $(this).delay(60*index).animate({  textIndent: 0 }, {
              //     step: function(now,fx) {
              //       $(this).css('transform','rotateX('+'0'+'deg)');
              //     },
              //     duration:'slow'
              //   },'linear');
              // })
    
        }
      })


      
      .fail(function() {
        countdown321();
      });
    }
    getListings();

    // countdown retry init
    var iteration = 3;

    // fire myTimer function every second
    var oneSecondInterval;
    function countdown321() {
        oneSecondInterval = setInterval(function(){ myTimer() }, 1000);
    }
    


    // hide preloader, start from 3, countdown one each time, show preloader, reset timer, re-run AJAX
    function myTimer() {

      retryMsg.innerHTML = "Couldn't connect, let's try again in "+ iteration +"...";
      loader.style.display = 'none';
      iteration--;
      if (iteration == -1) {
        retryMsg.innerHTML = "";
         loader.style.display = "";
          clearInterval(oneSecondInterval);
          iteration = 3;
          getListings();
      }
    }
  }
  ngDoCheck() {
    // if () {
    //   this.changeDetected = true;
    // }
  }
  ngAfterViewChecked()	
  {

    var getEm = document.getElementsByClassName('col-xs-12');
 if (this.initialViewChecked === false && getEm.length != 0) {
  var i;
  this.initialViewChecked = true;
console.log("beep")
      let elements = [].slice.call(document.getElementsByClassName('col-xs-12'));
      
      for (let elem of elements) {
        setTimeout(()=>elem.style.transform = "rotateX(0deg)", 20*i);
        i++
      }
 }
  
 
  } 
  
    
 
}

class MyController {
  private _items: string[] = []
  set items(value:string[]){
      this._items = value;
      console.log('Items changed:',value);
  }
  get items():string[]{
      return this._items;
  }
}

const ctrl = new MyController();
ctrl.items = ['hello','world']; // will also log to the console