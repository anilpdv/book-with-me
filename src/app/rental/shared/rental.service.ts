import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentals: Rental[] = [
    {
      id: 1,
      title: 'central Apartment',
      city: 'New York',
      street: 'Times Square',
      category: 'apartment',
      image: 'http://via.placeholder.com/320x250',
      description: 'Very nice apartment',
      bedrooms: 2,
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: 2,
      title: 'central Apartment 2',
      city: 'New York',
      street: 'Times Square',
      category: 'apartment',
      image: 'http://via.placeholder.com/320x250',
      description: 'Very nice apartment',
      bedrooms: 32,
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: 1,
      title: 'central Apartment 3',
      city: 'New York',
      street: 'Times Square',
      category: 'apartment',
      image: 'http://via.placeholder.com/320x250',
      description: 'Very nice apartment',
      bedrooms: 3,
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: 1,
      title: 'central Apartment 4',
      city: 'new jersey',
      street: 'Times Square',
      category: 'apartment',
      image: 'http://via.placeholder.com/320x250',
      description: 'Very nice apartment',
      bedrooms: 2,
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    }
  ];
  constructor() {}

  public getRentalById(rentalId: number): Observable<Rental> {
    return new Observable<Rental>(observer => {
      setTimeout(() => {
        const foundRental = this.rentals.find(rental => {
          return rental.id == rentalId;
        });

        observer.next(foundRental);
      }, 300);
    });
  }

  public getRentals(): any {
    const rentalObservable: Observable<Rental[]> = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
      setTimeout(() => {
        observer.error('I am Error');
      }, 2000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
    });
    return rentalObservable;
  }
}
