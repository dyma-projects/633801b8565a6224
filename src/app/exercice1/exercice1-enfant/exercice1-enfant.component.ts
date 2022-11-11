import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() count: number = 0;
  @Output() countUpdate = new EventEmitter<number>();

  constructor() {}

  incrementCounter() {
    if (this.count >= 0) {
      this.count++;
      this.countUpdate.emit(this.count);
    }
  }

  decrementCounter() {
    if (this.count > 0) {
      this.count--;
      this.countUpdate.emit(this.count);
    } else {
      this.count = 0;
    }
  }

  ngOnInit() {}
}
