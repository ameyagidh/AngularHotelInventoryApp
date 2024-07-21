import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HotelroomsComponent } from '../hotelrooms/hotelrooms.component';
import { roomlist } from '../hotelrooms/hotelroomsInterface';

@Component({
  selector: 'hiv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']  // Corrected here
})
export class RoomsListComponent {

  @Input() roomsList: roomlist[] = []; 
  @Output() selectedRoom = new EventEmitter<roomlist>();

  selectRoom(room: roomlist) {
    console.log("Selected room in child component:", room);
    this.selectedRoom.emit(room);
  }
}
