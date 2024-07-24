import { Inject, Injectable, OnInit } from '@angular/core';
import { roomlist } from '../hotelrooms/hotelroomsInterface';
import { environment } from '../../environments/environment';
import {API_SERVICE_CONFIG} from "../../app/AppConfig/appconfig.service"
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelroomsService implements OnInit {

  roomsList: roomlist[] = [];

  // Uncomment for static Data 

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
  getRooms$: any;
  
  constructor(@Inject(API_SERVICE_CONFIG) private config: AppConfig, private Http:HttpClient) {
    // console.log(environment.apiEndpoint);
    console.log(config.apiEndpoint)
    console.log("Environment Configured");
    // console.log(Http);
    this.getRooms$ = this.Http.get<roomlist[]>("/api/rooms").pipe(
      shareReplay(1)
    );
    
   }
  ngOnInit(): void {
  }

  getRooms(){
    // return this.roomsList;
    return this.Http.get<roomlist[]>('/api/rooms');
  }

  addRoom(room: roomlist){
    // http://localhost:3000
    return this.Http.post<roomlist[]>('/api/rooms', room);
  }

  editRoom(room: roomlist){
    return this.Http.put<roomlist[]>(`http://localhost:3000/api/rooms/${room.roomNumber}`, room)
  }

  deleteRoom(id:string){
    return this.Http.delete<roomlist[]>(`/api/rooms/${id}`)
  }
  
  getPhotos(){
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`,{
      reportProgress:true,
    });
    return this.Http.request(request);
  }

}
 