import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()

export class Listing {}

export const LISTINGS: Listing[] = [];

export class ListingService {

  getListings(): Observable<Listing[]> {
    return of(LISTINGS);
  }

}