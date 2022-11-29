import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss'],
})
export class PathComponent implements OnInit {
  @Input() ballSize = 10;
  @Input() isHorizontal: boolean = true;
  @Input() length: number = 100;
  @Input() isReverse: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  get animationDuration(): string {
    return `${this.length / 100}s`;
  }
}
