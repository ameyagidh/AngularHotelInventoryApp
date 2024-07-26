import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hiv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']  // Corrected 'styleUrl' to 'styleUrls'
})
export class RoomsBookingComponent implements OnInit {
  
  routeParams: any;
  id: number = 0;
  id_$!: Observable<number>;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {

    this.id_$ = this.router.params.pipe(
      map(params => +params['roomid']) 
    );
    console.log("This is observable pipe data");
    console.log(this.id_$);
    
    console.log("This is snapshot Data");
    console.log(this.router.snapshot.params["roomid"]);  

    this.router.params.subscribe((params) => {
      console.log(params["roomid"]);
      this.routeParams = params;      
      this.id = +params["roomid"];  // Ensuring id is a number
    });
  }
}
