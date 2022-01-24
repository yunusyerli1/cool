import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBillingSummaryComponent } from './card-billing-summary.component';

describe('CardBillingSummaryComponent', () => {
  let component: CardBillingSummaryComponent;
  let fixture: ComponentFixture<CardBillingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBillingSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBillingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
