import { Component, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-seccion-contacto',
  templateUrl: './seccion-contacto.component.html',
  styleUrls: ['./seccion-contacto.component.scss']
})
export class SeccionContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('seccionContacto') seccionContacto: ElementRef | any;

public scrollToIntro() {
  this.seccionContacto.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
  });
}


}
