import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HandleDataService } from '../handle-data.service';
import { BabyType } from '../types/baby-type';
import { UnicornType } from '../types/unicorn-type';

@Component({
  selector: 'app-list-mates',
  templateUrl: './list-mates.component.html',
  styleUrls: ['./list-mates.component.sass'],
})
export class ListMatesComponent implements OnInit, OnDestroy {
  unicorns: UnicornType[] = [];
  babies: BabyType[] = [];
  mates: any = [];
  private sub: Subscription = new Subscription();
  private second_sub: Subscription = new Subscription();

  constructor(private service: HandleDataService) {}

  ngOnInit(): void {
    this.sub = this.service.unicorns.subscribe((res: UnicornType[]) => {
      this.unicorns = res;
      this.handleData();
    });
    this.second_sub = this.service.babies.subscribe((res: BabyType[]) => {
      this.babies = res;
      this.handleData();
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.second_sub?.unsubscribe();
  }

  handleData() {
    const newMates: any = [];
    this.unicorns?.forEach((item: UnicornType) => {
      if (
        item.mate &&
        newMates.filter((el: any) => el.id === item.mate).length === 0
      ) {
        newMates.push({
          id: item.mate,
          items: this.unicorns.filter((el: any) => el.mate === item.mate),
          baby: this.babies[
            this.babies.findIndex((el: BabyType) => el.parents === item.mate)
          ],
        });
      }
    });
    this.mates = newMates;
  }
}
