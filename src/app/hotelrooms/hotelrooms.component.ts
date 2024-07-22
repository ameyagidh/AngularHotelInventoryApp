import { Component } from '@angular/core';
import { hotelroomsInterface, roomlist } from './hotelroomsInterface';
import { RoomsListComponent } from '../rooms-list/rooms-list.component';

@Component({
  selector: 'hiv-hotelrooms',
  templateUrl: './hotelrooms.component.html',
  styleUrls: ['./hotelrooms.component.scss']  // Corrected here
})
export class HotelroomsComponent {
  hotelname = "Courtyard";
  displayButton = false;
  mytxt = "Ameya Santosh Gidh is a Full Stack Developer";
  selectedRoom_ !: roomlist;
  title_ = "Ameya's Hotel"
  rooms: hotelroomsInterface = {
    totalRooms: 7,
    availableRooms: 2,
    bookedRooms: 5,
  };

  roomsList: roomlist[] = [
    {
      roomType: "Delux Room",
      amentites: "AC",
      price: 500,
      photo: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
      checkinTime: new Date("11-Nov-2024"),
      checkoutTime: new Date("13-Nov-2024"),
      rating: 4.5,
    },
    {
      roomType: "AC Room",
      amentites: "AC",
      price: 1500,
      photo: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
      checkinTime: new Date("11-Nov-2024"),
      checkoutTime: new Date("13-Nov-2024"),
      rating: 4,
    },
    {
      roomType: "Common Room",
      amentites: "AC",
      price: 200,
      photo: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
      checkinTime: new Date("11-Nov-2024"),
      checkoutTime: new Date("20-Nov-2024"),
      rating: 3.52,
    } 
  ];

  toggle() {
    this.displayButton = !this.displayButton;
    if(this.title_ == "Rooms List"){this.title_ = "Ameya's Hotel"}
    else{this.title_ = "Rooms List"}
  }

  selectRoom(room: roomlist) {
    console.log("Selected room in parent component:", room);
    this.selectedRoom_ = room;
  }

  AddRoom(){
    const room : roomlist = {
      roomType: "Newly Furnished Room",
      amentites: "AC2",
      price: 2000,
      photo: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
      checkinTime: new Date("01-Nov-2024"),
      checkoutTime: new Date("22-Nov-2024"),
      rating: 4.52,

    }
    // this.roomsList.push(room);
    this.roomsList = [...this.roomsList, room];
  }
  
}
