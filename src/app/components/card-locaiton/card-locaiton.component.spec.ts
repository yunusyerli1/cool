import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLocaitonComponent } from './card-locaiton.component';

describe('CardLocaitonComponent', () => {
  let component: CardLocaitonComponent;
  let fixture: ComponentFixture<CardLocaitonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLocaitonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLocaitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
