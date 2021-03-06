import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dexter',
  templateUrl: './dexter.component.html',
  styleUrls: ['./dexter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DexterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMouseMove() {
    this.router.navigate(['/jemel']);
  }
}
