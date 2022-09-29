import { Component, Input, OnInit } from '@angular/core';
import { UnicornType } from '../types/unicorn-type';

@Component({
  selector: 'app-unicorn-item',
  templateUrl: './unicorn-item.component.html',
  styleUrls: ['./unicorn-item.component.sass'],
})
export class UnicornItemComponent implements OnInit {
  @Input()
  item!: UnicornType;

  constructor() {}

  ngOnInit(): void {}
}
