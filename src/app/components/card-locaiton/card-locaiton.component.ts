import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-locaiton',
  templateUrl: './card-locaiton.component.html',
  styleUrls: ['./card-locaiton.component.scss']
})
export class CardLocaitonComponent implements OnInit {

  @Input() location:any;

  constructor() { }

  ngOnInit(): void {
  }

}
