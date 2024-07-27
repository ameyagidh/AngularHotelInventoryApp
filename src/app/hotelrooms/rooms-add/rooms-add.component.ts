import { Component, OnInit } from '@angular/core';
import { roomlist } from '../hotelroomsInterface';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomsService } from '../../../../hotelapi/dist/rooms/rooms.service';
import { HotelroomsService } from '../../services/hotelrooms.service';

@Component({
  selector: 'hiv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss'
})
export class RoomsAddComponent implements OnInit{

  room : roomlist = {
    // roomNumber:"3",
    roomType: "Ameya's Room",
    amentites: "",
    price: 0,
    photo: "",
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,

  }    
  successMsg = "";

  constructor(private roomService:HotelroomsService){
  }

  ngOnInit(): void {
  }
  AddRoom(roomsForm:NgForm){
    this.roomService.addRoom(this.room).subscribe((data)=>{
      console.log(data);
      this.successMsg = "Room Added Successfully";
      roomsForm.reset();
     });  
  }

}
