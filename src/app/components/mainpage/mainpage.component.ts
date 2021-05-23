import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit{
  private button:HTMLAnchorElement;
  private titleDiv:HTMLElement;
  hide:boolean;
  constructor() {
    
   }
  ngOnInit(): void {
    this.titleDiv = (document.getElementById('titles')?.parentElement as HTMLElement);
    this.button = (document.getElementById('contact') as HTMLAnchorElement);
  }



  @HostListener('window:scroll',['$event'])
  scrollFunction(event:Event) {
    this.titleDiv = (document.getElementById('titles')?.parentElement as HTMLElement);
    let rect: DOMRect = this.titleDiv.getBoundingClientRect();
    this.hide = (rect.bottom - this.getHeight(this.titleDiv)*0.8) < 0;
  }
  
  

  getHeight(elem:HTMLElement):number{
    let rect: DOMRect = this.titleDiv.getBoundingClientRect();
    return rect.height;
  }
}
