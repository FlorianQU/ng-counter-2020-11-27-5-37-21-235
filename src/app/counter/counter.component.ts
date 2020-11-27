import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  checkForPlus(): boolean {
    return this.count <= 10;
  }

  checkForMinus(): boolean {
    return this.count >= 0;
  }

  increaseCount(): void {
    this.count++;
  }

  decreaseCount(): void {
    this.count--;
  }

  checkForGreen(): boolean {
    return this.count < 0;
  }

  checkForRed(): boolean {
    return this.count > 10;
  }

  reset(): void {
    this.count = 0;
  }
}
