import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hiv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent implements OnInit{

  routeParams: any;
  id: number = 0;

  constructor(private router:ActivatedRoute) 
  {

  }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{console.log(params["roomid"])
    this.routeParams = params;      
    this.id  = params["roomid"]
    })
  }

}
