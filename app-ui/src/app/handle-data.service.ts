import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BabyType } from './types/baby-type';
import { UnicornType } from './types/unicorn-type';

@Injectable({
  providedIn: 'root',
})
export class HandleDataService {
  unicorns$: BehaviorSubject<any>;
  babies$: BehaviorSubject<any>;
  constructor() {
    this.unicorns$ = new BehaviorSubject([]);
    this.babies$ = new BehaviorSubject([]);
  }

  set unicorns(value: any) {
    this.unicorns$.next(value);
  }

  get unicorns(): any {
    return this.unicorns$.asObservable();
  }

  set babies(value: any) {
    this.babies$.next(value);
  }

  get babies(): any {
    return this.babies$.asObservable();
  }

  getUnicorns() {
    const data: any = localStorage.getItem('unicorns_list');
    this.unicorns = JSON.parse(data);
  }

  updateUnicorns(newData: UnicornType[]) {
    this.unicorns = newData;
    localStorage.setItem('unicorns_list', JSON.stringify(newData));
  }

  createUnicorn(newbie: UnicornType) {
    const data: any = localStorage.getItem('unicorns_list');
    const newData: any = data ? JSON.parse(data) : [];
    newData.unshift(newbie);
    this.unicorns = newData;
    localStorage.setItem('unicorns_list', JSON.stringify(newData));
  }

  getUnicornBabies() {
    const data: any = localStorage.getItem('babies_list');
    this.babies = JSON.parse(data);
  }

  createUnicornBaby(newbie: BabyType) {
    const data: any = localStorage.getItem('babies_list');
    const newData: any = data ? JSON.parse(data) : [];
    newData.push(newbie);
    this.babies = newData;
    localStorage.setItem('babies_list', JSON.stringify(newData));
  }
}
