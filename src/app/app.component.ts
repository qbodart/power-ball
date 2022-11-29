import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ballSize = 10;
  pathLength = 300;
  delta = 2;

  ngOnInit() {
    // setInterval(() => {
    //   this.ballSize = this.ballSize + this.delta;
    //   if (this.ballSize > 70 || this.ballSize < 10) {
    //     this.delta = -this.delta;
    //   }
    // }, 100);
  }
}
