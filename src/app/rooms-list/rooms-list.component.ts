import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HotelroomsComponent } from '../hotelrooms/hotelrooms.component';
import { roomlist } from '../hotelrooms/hotelroomsInterface';

@Component({
  selector: 'hiv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']  // Corrected here
})
export class RoomsListComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
   if(changes["title_"]){
      this.title_ = changes["title_"].currentValue.toUpperCase();
   }
  }

  @Input() roomsList: roomlist[] = []; 
  @Input() title_: string = "";
  @Output() selectedRoom = new EventEmitter<roomlist>();

  selectRoom(room: roomlist) {
    console.log("Selected room in child component:", room);
    this.selectedRoom.emit(room);
  }
}
