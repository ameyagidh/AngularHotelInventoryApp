import { Component, EventEmitter, Input, Output } from '@angular/core';
import { roomlist } from '../hotelrooms/hotelroomsInterface';

@Component({
  selector: 'hiv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent {

  @Input() roomsList: roomlist[] = []; 
  @Output() selectedRoom = new EventEmitter<roomlist>();

  selectRoom(room: roomlist) {
    console.log("Selected room in child component:");
    this.selectedRoom.emit(room);
  }
}
