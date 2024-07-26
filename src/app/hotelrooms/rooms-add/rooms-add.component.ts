import { Component, OnInit } from '@angular/core';
import { roomlist } from '../hotelroomsInterface';

@Component({
  selector: 'hiv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss'
})
export class RoomsAddComponent implements OnInit{

  room : roomlist = {
    // roomNumber:"3",
    roomType: "Newly Furnished Room",
    amentites: "AC2",
    price: 0,
    photo: "",
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,

  }    

  ngOnInit(): void {
  }

}
