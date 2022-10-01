import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators.class';
import { HandleDataService } from '../handle-data.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-form-unicorn',
  templateUrl: './add-form-unicorn.component.html',
  styleUrls: ['./add-form-unicorn.component.sass'],
})
export class AddFormUnicornComponent implements OnInit {
  isSubmitted: boolean = false;
  loading: boolean = false;
  @Output() handleClose: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private service: HandleDataService) {}

  addForm: any = this.fb.group({
    name: ['', [Validators.required]],
    age: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    color: ['', [Validators.required, CustomValidators.hexColorValidator]],
  });

  ngOnInit(): void {}

  save() {
    this.isSubmitted = true;
    if (this.addForm.valid) {
      this.loading = true;
      const newbie = { ...this.addForm.value, id: uuid() };
      setTimeout(() => {
        this.service.createUnicorn(newbie);
        this.isSubmitted = false;
        this.handleClose.emit();
        this.addForm.reset();
        this.loading = false;
      }, 1000);
    }
  }
}
