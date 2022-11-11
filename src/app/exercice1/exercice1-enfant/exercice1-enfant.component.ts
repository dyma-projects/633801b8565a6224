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
    this.count++;
    this.countUpdate.emit(this.count);
  }

  decrementCounter() {
    this.count--;
    this.countUpdate.emit(this.count);
  }

  ngOnInit() {}
}
