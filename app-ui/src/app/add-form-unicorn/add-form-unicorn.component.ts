import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators.class';
import { HandleDataService } from '../handle-data.service';

@Component({
  selector: 'app-add-form-unicorn',
  templateUrl: './add-form-unicorn.component.html',
  styleUrls: ['./add-form-unicorn.component.sass'],
})
export class AddFormUnicornComponent implements OnInit {
  isSubmitted: boolean = false;
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
      this.service.createUnicorn(this.addForm?.value);
      this.isSubmitted = false;
      this.handleClose.emit();
    }
  }
}
