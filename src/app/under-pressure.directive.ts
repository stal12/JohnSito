import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appUnderPressure]'
})
export class UnderPressureDirective {
  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
    this.el.nativeElement.classList.add('mat-elevation-z13');



  }

  @HostListener('mousedown') onMouseDown() {
    this.el.nativeElement.classList.remove('mat-elevation-z13');
     this.el.nativeElement.classList.add('mat-elevation-z1');
  }

  @HostListener('window:mouseup') onMouseUp() {
    this.el.nativeElement.classList.remove("mat-elevation-z1");
    this.el.nativeElement.classList.add('mat-elevation-z13');
    console.log('mouseup');
  }

}
