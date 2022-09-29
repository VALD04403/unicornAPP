import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMatesFormComponent } from './create-mates-form.component';

describe('CreateMatesFormComponent', () => {
  let component: CreateMatesFormComponent;
  let fixture: ComponentFixture<CreateMatesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMatesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMatesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
