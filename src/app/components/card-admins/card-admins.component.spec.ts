import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdminsComponent } from './card-admins.component';

describe('CardAdminsComponent', () => {
  let component: CardAdminsComponent;
  let fixture: ComponentFixture<CardAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
