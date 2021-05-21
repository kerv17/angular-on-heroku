import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  @ViewChild('navBar')
  navBar!: ElementRef;
  @ViewChild('logo')
  logo!: ElementRef;

  constructor() {
      addEventListener('scroll',(event)=>{
        window.onscroll = this.scrollFunction;
      });
   }

  ngOnInit(): void {
  }

  scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      this.navBar.nativeElement.style.padding = "30px 10px";
      this.logo.nativeElement.style.fontSize = "25px";
    } else {
      this.navBar.nativeElement.style.padding = "80px 10px";
      this.logo.nativeElement.style.fontSize = "35px";
    }
  }

}
