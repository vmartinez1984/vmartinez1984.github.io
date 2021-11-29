import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.background = "url(/assets/images/Cielo.jpg)";
 }
}
