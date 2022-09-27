import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-form-unicorn',
  templateUrl: './add-form-unicorn.component.html',
  styleUrls: ['./add-form-unicorn.component.sass'],
})
export class AddFormUnicornComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  addForm = this.fb.group({
    name: [''],
    age: [''],
    gender: [''],
    color: [''],
  });

  ngOnInit(): void {}

  save() {}
}
