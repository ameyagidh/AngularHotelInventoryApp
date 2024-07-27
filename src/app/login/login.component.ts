import { Component } from '@angular/core';
import { HotelroomsComponent } from '../hotelrooms/hotelrooms.component';

@Component({
  selector: 'hiv-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  name: string = "Ameya"
  email:string = "ameyagidh2@gmail.com"
  password: string = "abc@1234"

  Login(){
    if(this.email === "ameyagidh2@gmail.com" && this.password ==="abc@1234"){
      alert("Login Successful")
    }
  }

}
