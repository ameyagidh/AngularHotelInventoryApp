import { Inject, Injectable } from '@angular/core';
import { roomlist } from '../hotelrooms/hotelroomsInterface';
import { environment } from '../../environments/environment';
import {API_SERVICE_CONFIG} from "../../app/AppConfig/appconfig.service"
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelroomsService {

  // roomsList: roomlist[] = [
  //   {
  //     roomType: "Delux Room",
  //     amentites: "AC",
  //     price: 500,
  //     photo: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
  //     checkinTime: new Date("11-Nov-2024"),
  //     checkoutTime: new Date("13-Nov-2024"),
  //     rating: 4.5,
  //   },
  //   {
  //     roomType: "AC Room",
  //     amentites: "AC",
  //     price: 1500,
  //     photo: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
  //     checkinTime: new Date("11-Nov-2024"),
  //     checkoutTime: new Date("13-Nov-2024"),
  //     rating: 4,
  //   },
  //   {
  //     roomType: "Common Room",
  //     amentites: "AC",
  //     price: 200,
  //     photo: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
  //     checkinTime: new Date("11-Nov-2024"),
  //     checkoutTime: new Date("20-Nov-2024"),
  //     rating: 3.52,
  //   } 
  // ];
 
  roomsList: roomlist[] = [];

  constructor(@Inject(API_SERVICE_CONFIG) private config: AppConfig, private Http:HttpClient) {
    // console.log(environment.apiEndpoint);
    console.log(config.apiEndpoint)
    console.log("Environment Configured");
    // console.log(Http);
   }

  getRooms(){
    // return this.roomsList;
    return this.Http.get<roomlist[]>('/api/rooms');
  }
}
 