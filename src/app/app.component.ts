import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HotelroomsComponent } from './hotelrooms/hotelrooms.component';
import { HeaderComponent } from './header/header.component';
import { LocalStorageToken } from './localstorage.token';
import { InitService } from './init.service';

@Component({
  selector: 'hiv',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
 
  title = 'hotelInventoryApp';
  role = "Admin";

  constructor(@Inject(LocalStorageToken) private localStorage:Storage, private initService: InitService){
    console.log(this.initService);
    console.log(this.initService.config);
  }
 
  ngOnInit(): void {
    this.localStorage.setItem('name', "Ameya Santosh Gidh Cafe");
    console.log("Local Storage and Service");
  }

}
