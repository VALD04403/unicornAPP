import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandleDataService {
  unicorns$: BehaviorSubject<any>;
  constructor() {
    this.unicorns$ = new BehaviorSubject([]);
  }

  set unicorns(value: any) {
    this.unicorns$.next(value);
  }

  get unicorns(): any {
    return this.unicorns$.asObservable();
  }

  getUnicorns() {}

  addUnicorn() {}

  updateUnicorns() {}
}
