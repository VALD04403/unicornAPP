import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatesComponent } from './list-mates.component';

describe('ListMatesComponent', () => {
  let component: ListMatesComponent;
  let fixture: ComponentFixture<ListMatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
