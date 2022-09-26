import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnicornComponent } from './list-unicorn.component';

describe('ListUnicornComponent', () => {
  let component: ListUnicornComponent;
  let fixture: ComponentFixture<ListUnicornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUnicornComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUnicornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
