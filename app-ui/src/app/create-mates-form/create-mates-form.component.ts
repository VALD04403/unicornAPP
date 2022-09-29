import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { HandleDataService } from '../handle-data.service';
import { UnicornType } from '../types/unicorn-type';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create-mates-form',
  templateUrl: './create-mates-form.component.html',
  styleUrls: ['./create-mates-form.component.sass'],
})
export class CreateMatesFormComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  @Output() handleClose: EventEmitter<any> = new EventEmitter();

  unicorns: UnicornType[] = [];
  selected: UnicornType[] = [];
  current: number = 0;

  constructor(private service: HandleDataService) {}

  ngOnInit(): void {
    this.sub = this.service.unicorns.subscribe((res: UnicornType[]) => {
      this.unicorns = res;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  handleCarousel(newData: number) {
    if (
      this.current > newData
        ? this.current > 0
        : this.current < this.unicorns?.length - 1
    ) {
      this.current = newData;
    }
  }

  createMate() {
    if (this.selected?.length < 2) {
      this.selected.push(this.unicorns[this.current]);
      this.unicorns.splice(this.current, 1);
      this.current = 0;
    } else {
      const newData = this.unicorns;
      this.selected[0].mate = uuid();
      this.selected[1].mate = uuid();
      newData.push(...this.selected);
      this.service.updateUnicorns(newData);
      this.handleClose.emit();
      this.selected = [];
    }
  }
}
