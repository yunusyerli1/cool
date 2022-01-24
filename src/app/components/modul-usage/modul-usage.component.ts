import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modul-usage',
  templateUrl: './modul-usage.component.html',
  styleUrls: ['./modul-usage.component.scss']
})
export class ModulUsageComponent implements OnInit {

  total:number=135000;

  usage: any= {
    "exams": 70304,
    "monitoring": 44616,
    "application Library": 20280
  }
  
  usageArray:any;
  constructor() { }

  ngOnInit(): void {
    this.usageArray= Object.keys(this.usage).map(key => ({name: key, total: this.usage[key]}));
  }

}
