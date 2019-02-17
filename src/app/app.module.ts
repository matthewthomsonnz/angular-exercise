import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingService } from './listing.service';
import { TimeSinceListedPipe } from './pipes/time-since-listed.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    TimeSinceListedPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ListingService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
