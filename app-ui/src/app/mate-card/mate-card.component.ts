import { Component, Input, OnInit } from '@angular/core';
import { UnicornType } from '../types/unicorn-type';
import { v4 as uuid } from 'uuid';
import { BabyType } from '../types/baby-type';
import { HandleDataService } from '../handle-data.service';

@Component({
  selector: 'app-mate-card',
  templateUrl: './mate-card.component.html',
  styleUrls: ['./mate-card.component.sass'],
})
export class MateCardComponent implements OnInit {
  @Input()
  mate!: { id: string; items: UnicornType[]; baby: BabyType };

  constructor(private service: HandleDataService) {}

  ngOnInit(): void {}

  canMakeBaby() {
    return (
      this.mate.items[0].gender
        .concat('', this.mate.items[1].gender)
        .includes('Female') &&
      this.mate.items[0].gender
        .concat('', this.mate.items[1].gender)
        .includes('Male')
    );
  }

  makeBaby() {
    const baby: BabyType = {
      id: uuid(),
      parents: this.mate.items[0].mate,
      name: this.mate.items[0].name.concat('-', this.mate.items[1].name),
      gender: ['Female', 'Male', 'Other'][Math.floor(Math.random() * 3)],
      color: `#${this.mate.items[0].color
        .substring(1)
        .concat('', this.mate.items[1].color.substring(1))
        .split('')
        .sort(function () {
          return 0.5 - Math.random();
        })
        .join('')
        .slice(0, 6)}`,
    };
    this.service.createUnicornBaby(baby);
  }
}
