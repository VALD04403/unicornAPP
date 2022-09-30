import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HandleDataService } from '../handle-data.service';
import { UnicornType } from '../types/unicorn-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit, OnDestroy {
  formCollapsed: boolean = false;
  unicorns: UnicornType[] = [];
  private sub: Subscription = new Subscription();

  constructor(private service: HandleDataService, private router: Router) {
    this.service.getUnicorns();
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

  redirectMates() {
    this.router.navigate(['/mates']);
  }
}
