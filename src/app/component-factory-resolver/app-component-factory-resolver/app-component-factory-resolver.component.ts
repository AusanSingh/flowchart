import { Component, OnInit } from '@angular/core';
import { CompFactResService } from '../comp-fact-res.service';
import { CompFactResItem } from '../comp-fact-res-item';

@Component({
  selector: 'app-app-component-factory-resolver',
  templateUrl: './app-component-factory-resolver.component.html',
  styleUrls: ['./app-component-factory-resolver.component.scss'],
  providers:[CompFactResService]
})
export class AppComponentFactoryResolverComponent implements OnInit {

  compFactResItem: CompFactResItem[];

  constructor(private compFactResService: CompFactResService) {}

  ngOnInit() {
    //Getting the child components data from the service so that we can load the component dynamically
    this.compFactResItem = this.compFactResService.getAds();
  }

}
