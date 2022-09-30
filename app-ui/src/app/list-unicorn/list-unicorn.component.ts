import { Component, OnInit, Input } from '@angular/core';
import { UnicornType } from '../types/unicorn-type';

@Component({
  selector: 'app-list-unicorn',
  templateUrl: './list-unicorn.component.html',
  styleUrls: ['./list-unicorn.component.sass'],
})
export class ListUnicornComponent implements OnInit {
  @Input() unicorns: UnicornType[] = [];

  constructor() {}

  ngOnInit(): void {}
}
