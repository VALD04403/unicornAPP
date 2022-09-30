import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateCardComponent } from './mate-card.component';

describe('MateCardComponent', () => {
  let component: MateCardComponent;
  let fixture: ComponentFixture<MateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
