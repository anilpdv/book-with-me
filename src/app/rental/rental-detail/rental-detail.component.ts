import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.sass']
})
export class RentalDetailComponent implements OnInit {
  currentId: string;
  rental: Rental;
  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRental(params.rentalId);
      console.log(typeof params.rentalId);
    });
  }

  getRental(rentalId: number) {
    this.rentalService.getRentalById(rentalId).subscribe((rental: Rental) => {
      this.rental = rental;
    });
  }
}
