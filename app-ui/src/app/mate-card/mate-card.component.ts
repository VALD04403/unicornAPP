import { Component, Input, OnInit } from '@angular/core';
import { UnicornType } from '../types/unicorn-type';

@Component({
  selector: 'app-mate-card',
  templateUrl: './mate-card.component.html',
  styleUrls: ['./mate-card.component.sass'],
})
export class MateCardComponent implements OnInit {
  @Input()
  items!: UnicornType[];

  constructor() {}

  ngOnInit(): void {}

  canMakeBaby() {
    return (
      this.items[0].gender
        .concat('', this.items[1].gender)
        .includes('Female') &&
      this.items[0].gender.concat('', this.items[1].gender).includes('Male')
    );
  }
}
