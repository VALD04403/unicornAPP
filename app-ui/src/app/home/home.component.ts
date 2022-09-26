import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  formCollapsed: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  displayForm() {
    this.formCollapsed = !this.formCollapsed;
  }
}
