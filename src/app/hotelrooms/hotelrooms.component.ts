import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Optional, QueryList, Self, SkipSelf, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { hotelroomsInterface, roomlist } from './hotelroomsInterface';
import { RoomsListComponent } from '../rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { HotelroomsService } from '../services/hotelrooms.service';
import { LoggerService } from '../services/logger.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hiv-hotelrooms',
  templateUrl: './hotelrooms.component.html',
  styleUrls: ['./hotelrooms.component.scss']  // Corrected here
})
export class HotelroomsComponent implements AfterViewInit, AfterViewChecked, OnInit, OnDestroy{
  ngOnDestroy(): void {
   console.log("Destroy Called"); 
  }

  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
  @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name',{static:true}) name!: ElementRef
  @ViewChildren(HeaderComponent)headerChildrenComponent!: QueryList<HeaderComponent>;

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    // console.log(this.headerComponent.title);
    const componentRef = this.vcr.createComponent(HeaderComponent);
    componentRef.instance.title = 'Ameya Coffee Shops';
    this.name.nativeElement.innerText = "Changed Inner Text"
    if (this.headerComponent) {
      this.headerChildrenComponent.last.title = 'CCD'; 
      console.log( this.headerChildrenComponent.last.title )
    }
    }

  ngAfterViewChecked(): void {
    // this.headerComponent.title = "Tp"
  }
  
  hotelname = "Courtyard";
  displayButton = false;
  destroyButton = true;
  mytxt = "Ameya Santosh Gidh is a Full Stack Developer";
  selectedRoom_ !: roomlist;
  title_ = "Ameya's Hotel"
  rooms: hotelroomsInterface = {
    totalRooms: 7,
    availableRooms: 2,
    bookedRooms: 5,
  };

  // Dependency Injection 
  roomsList: roomlist[] = []
   
  stream = new Observable(observer =>{
    observer.next(1);
    observer.next("user1");
    observer.next("user2");
    observer.complete();
  })

  constructor( private hotelroomsService: HotelroomsService, private loggerService: LoggerService){
  }

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Ameya Santosh Gidh"

    // Uncomment to use Static Data from the service
    // this.roomsList =  this.hotelroomsService.getRooms()

    // Display data fetched from API Service into the website
    this.hotelroomsService.getRooms().subscribe(rooms=>{this.roomsList = rooms;})

    console.log(this.hotelroomsService.getRooms());
    this.loggerService?.Log("Log Injected");
    // Rxjs getting data from RX JS 
    this.stream.subscribe((data)=>{console.log(data)})
  
  }

  toggle() {
    this.displayButton = !this.displayButton;
    if(this.title_ == "Rooms List"){this.title_ = "Ameya's Hotel"}
    else{this.title_ = "Rooms Lists"}
    this.destroyButton = !this.destroyButton
  }

  selectRoom(room: roomlist) {
    console.log("Selected room in parent component:", room);
    this.selectedRoom_ = room;
  }

  AddRoom(){
    const room : roomlist = {
      // roomNumber:"3",
      roomType: "Newly Furnished Room",
      amentites: "AC2",
      price: 2000,
      photo: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
      checkinTime: new Date("01-Nov-2024"),
      checkoutTime: new Date("22-Nov-2024"),
      rating: 4.52,

    }

    // this.roomsList.push(room);

    // Better way
    // this.roomsList = [...this.roomsList, room];
    
    // Post data to api
    this.hotelroomsService.addRoom(room).subscribe((data)=>{this.roomsList = data})

  } 
  

}
