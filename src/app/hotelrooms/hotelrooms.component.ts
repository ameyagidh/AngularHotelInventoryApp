import { Component } from '@angular/core';
import { hotelroomsInterface, roomlist } from './hotelroomsInterface';

@Component({
  selector: 'hiv-hotelrooms',
  templateUrl: './hotelrooms.component.html',
  styleUrl: './hotelrooms.component.scss'
})
export class HotelroomsComponent {
  hotelname = "Courtyard"
  displayButton = false;
  mytxt = "Ameya Santosh Gidh is a Full Stack Developer";

  rooms: hotelroomsInterface = {
    totalRooms: 7,
    availableRooms: 2,
    bookedRooms: 5,
  };

  roomsList: roomlist[] = [{
    roomType: "Delux Room",
    amentites: "AC",
    price: 500,
    photo: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
    checkinTime: new Date("11-Nov-2024"),
    checkoutTime: new Date("13-Nov-2024"),
  },
  {
    roomType: "AC Room",
    amentites: "AC",
    price: 1500,
    photo: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
    checkinTime: new Date("11-Nov-2024"),
    checkoutTime: new Date("13-Nov-2024"),
  },
  {
    roomType: "Common Room",
    amentites: "AC",
    price: 200,
    photo: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
    checkinTime: new Date("11-Nov-2024"),
    checkoutTime: new Date("13-Nov-2024"),
  }

]

  toggle(){
    this.displayButton = ! this.displayButton;
  }

}
