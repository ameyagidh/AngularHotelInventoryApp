import { Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HotelroomsComponent } from '../hotelrooms/hotelrooms.component';
import { roomlist } from '../hotelrooms/hotelroomsInterface';

@Component({
  selector: 'hiv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']  // Corrected here
})
export class RoomsListComponent implements OnChanges, DoCheck {
  ngDoCheck(): void {
  //  console.log("Do Check is called")
  }
  ngOnChanges(changes: SimpleChanges): void { 
   console.log(changes);
  //  console.log("On Change is called")
   if(changes["title_"]){
      this.title_ = changes["title_"].currentValue.toUpperCase();
   }
  }

  // @Input() roomsList: roomlist[] | null = [] ; 
  @Input() roomsList: roomlist[] | null= [] ; 
  @Input() title_: string = "";
  @Output() selectedRoom = new EventEmitter<roomlist>();

  selectRoom(room: roomlist) {
    console.log("Selected room in child component:", room);
    this.selectedRoom.emit(room);
  }
}
