import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-alumination',
  templateUrl: './alumination.component.html',
  styleUrls: ['./alumination.component.css']
})
export class AluminationComponent implements OnInit {
 menuOpen=0;img0=0;img1=0;img2=0;
  

  
  constructor() {
   }

  ngOnInit(): void {
    
  

}

onClickHamburger() {
  this.menuOpen=1;
  document.getElementById("hamburger-menu").style.width="50%";
}
onClickClose() {
  this.menuOpen=0;
  document.getElementById("hamburger-menu").style.width="0%";
}

bringImg0() {
  if(this.img0==1)
  {document.getElementById("img0").style.animation="shake 0.5s";
   document.getElementById("img0").style.animationIterationCount="1"}


  this.img0=1;this.img1=0;this.img2=0;

  document.getElementById("img0").style.width="50rem";
  document.getElementById("img1").style.width="0";
  document.getElementById("img2").style.width="0";

}

bringImg1() {
  if(this.img1==1)
  {document.getElementById("img1").style.animation="shake 0.5s";
   document.getElementById("img1").style.animationIterationCount="1"}


  this.img0=0;this.img1=1;this.img2=0;

  document.getElementById("img0").style.width="0";
  document.getElementById("img1").style.width="50rem";
  document.getElementById("img2").style.width="0";
  
}

bringImg2() {
  if(this.img2==1)
  {document.getElementById("img2").style.animation="shake 0.5s";
   document.getElementById("img2").style.animationIterationCount="1"}
  
  
  this.img0=0;this.img1=0;this.img2=1;

  document.getElementById("img0").style.width="0";
  document.getElementById("img1").style.width="0";
  document.getElementById("img2").style.width="50rem";

}

}
