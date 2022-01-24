import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-billing-summary',
  templateUrl: './card-billing-summary.component.html',
  styleUrls: ['./card-billing-summary.component.scss']
})
export class CardBillingSummaryComponent implements OnInit {
  billing: Array<any> = [
    {
      "service": "Monitoring",
      "type": "session",
      "date": 1629197711,
      "amount": 75.67
    },
    {
      "service": "Exams",
      "type": "session",
      "date": 1629197711,
      "amount": 75.67
    },
    {
      "service": "Exams",
      "type": "storage",
      "date": 1629197711,
      "amount": 75.67
    },
    {
      "service": "Application Library",
      "type": "month",
      "date": 1629197711,
      "amount": 75.67
    },
    {
      "service": "Monitoring",
      "type": "bandwidth",
      "date": 1629197711,
      "amount": 75.67
    },
    {
      "service": "Application Library",
      "type": "bandwidth",
      "date": 1629197711,
      "amount": 85.62
    },
    {
      "service": "Exams",
      "type": "bandwidth",
      "date": 1629197711,
      "amount": 173.27
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
