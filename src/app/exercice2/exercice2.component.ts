import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('myinput', { static: true })
  private el!: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit() {}

  displayValue() {
    this.valeur = this.el.nativeElement.value;
  }
}
