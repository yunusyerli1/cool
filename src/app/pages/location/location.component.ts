import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  
  cardLocations:Array<any>;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cardLocations=this.dataService.locations;
    this.route.data.subscribe(data =>this.dataService.headerTitle = data.title);
    this.dataService.headerSubtitle = 'Overview of your locations, licences and products';
  }

}



