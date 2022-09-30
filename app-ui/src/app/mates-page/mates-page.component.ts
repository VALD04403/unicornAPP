import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HandleDataService } from '../handle-data.service';
import { UnicornType } from '../types/unicorn-type';

@Component({
  selector: 'app-mates-page',
  templateUrl: './mates-page.component.html',
  styleUrls: ['./mates-page.component.sass'],
})
export class MatesPageComponent implements OnInit, OnDestroy {
  formCollapsed: boolean = false;
  unicorns: UnicornType[] = [];
  private sub: Subscription = new Subscription();

  constructor(private router: Router, public service: HandleDataService) {
    this.service.getUnicorns();
    this.service.getUnicornBabies();
  }

  ngOnInit(): void {
    this.sub = this.service.unicorns.subscribe((res: UnicornType[]) => {
      this.unicorns = res;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  displayForm() {
    this.formCollapsed = !this.formCollapsed;
  }

  redirectList() {
    this.router.navigate(['/home']);
  }

  canMakeMates() {
    return this.unicorns?.filter((el: UnicornType) => !el.mate).length > 1;
  }
}
