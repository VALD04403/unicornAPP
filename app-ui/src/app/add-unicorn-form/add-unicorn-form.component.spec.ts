import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnicornFormComponent } from './add-unicorn-form.component';

describe('AddUnicornFormComponent', () => {
  let component: AddUnicornFormComponent;
  let fixture: ComponentFixture<AddUnicornFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUnicornFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUnicornFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
