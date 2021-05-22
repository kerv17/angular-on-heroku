import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  private navbar:HTMLElement;
  private title:HTMLElement;

  constructor() {
    window.onscroll = this.scrollFunction;
   }
  ngOnInit(): void {
    this.navbar = (document.getElementById('navbar') as HTMLElement);
    this.title = (document.getElementById('title') as HTMLElement);
    this.scrollFunction();
  }



  scrollFunction() {
    let rect: DOMRect = this.title.getBoundingClientRect()
    this.navbar.hidden = (rect.bottom - 50) > 0;
    this.title.style.visibility = !this.navbar.hidden ? 'hidden' : 'visible';
  }

}
