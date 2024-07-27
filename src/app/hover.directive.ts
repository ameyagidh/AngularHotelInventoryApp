import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[hivHover]'
})
export class HoverDirective implements OnInit{

  color:string = "red";

  constructor(private element: ElementRef,private remderer: Renderer2) {
        console.log(element.nativeElement);
        
   }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "pink"
    this.remderer.setStyle(this.element.nativeElement, 'color',"blue" )
  }

}
