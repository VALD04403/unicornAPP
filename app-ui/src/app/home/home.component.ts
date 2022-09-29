import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  formCollapsed: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  displayForm() {
    this.formCollapsed = !this.formCollapsed;
  }

  redirectMates() {
    this.router.navigate(['/mates']);
  }
}
