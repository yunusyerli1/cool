import { Component, OnInit } from '@angular/core';
import { CardBillingSummaryComponent } from '../card-billing-summary/card-billing-summary.component';

@Component({
  selector: 'app-card-credit',
  templateUrl: './card-credit.component.html',
  styleUrls: ['./card-credit.component.scss']
})
export class CardCreditComponent implements OnInit {

  cards:any= {
    "primaryCard": {
      "bank": "cloudcash",
      "type": "premium account",
      "name": "Bobi Codeshake",
      "number": "5798 **** **** 2847",
      "expiry": "06/21",
      "ccv": 928,
      "active": true
    },
    "expense": {
      "current": 350.60,
      "limit": 4000
    },
    "balance": {
      "current": 2850.75,
      "credit": 1500.50,
      "provisions": 350.60
    }
  }

  creditNumber:any;
  cardDeactivation:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setCardNumber();
  }
  
  setCardNumber() {
    this.cardDeactivation = this.cards.primaryCard.active;
    this.creditNumber = (this.cards.primaryCard.number).split(" ").map((el:any)=>{
      if(el === '****') el = "* * * *";
      return el;
    }).join("   ");
  }

}
