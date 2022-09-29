import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatesPageComponent } from './mates-page.component';

describe('MatesPageComponent', () => {
  let component: MatesPageComponent;
  let fixture: ComponentFixture<MatesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
