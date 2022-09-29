import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { HandleDataService } from '../handle-data.service';
import { UnicornType } from '../types/unicorn-type';

@Component({
  selector: 'app-list-mates',
  templateUrl: './list-mates.component.html',
  styleUrls: ['./list-mates.component.sass'],
})
export class ListMatesComponent implements OnInit {
  @Input() unicorns: UnicornType[] = [];
  mates: UnicornType[] = [];

  constructor() {}

  ngOnInit(): void {
    this.unicorns.map((item: UnicornType) => {
      item?.mate && this.mates.push(item);
    });
    const newMates: any = [];
    this.mates.map((item: UnicornType) => {
      newMates.map((mate: any) => {
        {
          mate.map((el: UnicornType) => {
            if (el.mate === item.mate) {
              mate.push(item);
            } else {
              newMates.push([item]);
            }
          });
        }
      });
    });
  }
}
