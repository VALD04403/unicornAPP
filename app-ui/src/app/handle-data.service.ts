import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnicornType } from './types/unicorn-type';

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

  getUnicorns() {
    const data: any = localStorage.getItem('unicorns_list');
    this.unicorns = JSON.parse(data);
  }

  updateUnicorns(newData: UnicornType[]) {
    localStorage.setItem('unicorns_list', JSON.stringify(newData));
  }

  createUnicorn(newbie: UnicornType) {
    const data: any = localStorage.getItem('unicorns_list');
    console.log(data);
    const newData: any = data ? JSON.parse(data) : [];
    newData.unshift(newbie);
    localStorage.setItem('unicorns_list', JSON.stringify(newData));
  }
}
