import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HotelroomsComponent } from './hotelrooms/hotelrooms.component';
import { ContainerComponent } from './container/container.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './hotelrooms/rooms-booking/rooms-booking.component';

const routes: Routes = [
  {path: "employee", component: EmployeeComponent},
  {path:"rooms", component: HotelroomsComponent},
  {path:"header", component: Headers},
  {path: "container", component: ContainerComponent},
  {path:"roomsList", component: RoomsListComponent },
  {path: "rooms/:id", component: RoomsBookingComponent},
  {path:"", redirectTo:'/rooms' ,pathMatch:"full"},
  {path:"**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
