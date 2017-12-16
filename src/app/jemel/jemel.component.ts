import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-jemel',
  templateUrl: './jemel.component.html',
  styleUrls: ['./jemel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JemelComponent implements OnInit {
  seiScemo = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.seiScemo = !this.seiScemo;
  }

}
