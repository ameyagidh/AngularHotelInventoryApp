import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { HotelroomsComponent } from './hotelrooms/hotelrooms.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'hiv',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
 
  title = 'hotelInventoryApp';
  role = "Admin";
  
}
