import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormUnicornComponent } from './add-form-unicorn.component';

describe('AddFormUnicornComponent', () => {
  let component: AddFormUnicornComponent;
  let fixture: ComponentFixture<AddFormUnicornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormUnicornComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormUnicornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
