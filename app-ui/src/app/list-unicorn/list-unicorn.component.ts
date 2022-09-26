import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HandleDataService } from '../handle-data.service';
import { UnicornType } from '../types/unicorn-type';

@Component({
  selector: 'app-list-unicorn',
  templateUrl: './list-unicorn.component.html',
  styleUrls: ['./list-unicorn.component.sass'],
})
export class ListUnicornComponent implements OnInit, OnDestroy {
  unicorns: UnicornType[] = [];
  private sub: Subscription = new Subscription();

  constructor(public service: HandleDataService) {}

  ngOnInit(): void {
    this.sub = this.service.unicorns.subscribe((res: UnicornType[]) => {
      this.unicorns = res;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
