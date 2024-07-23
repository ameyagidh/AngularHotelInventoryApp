import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hiv-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit{
  
  @Input() title: string = "Ameya Cafe"

 constructor(){

 }

  ngOnInit(): void {

  }

}
