import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { CompFactResItem } from '../comp-fact-res-item';
import { CompFactResDirective } from '../comp-fact-res.directive';
import { CompFactResInterface } from '../comp-fact-res-interface.component';

@Component({
  selector: 'app-comp-fact-res-first',
  templateUrl: './comp-fact-res-first.component.html',
  styleUrls: ['./comp-fact-res-first.component.scss']
})
export class CompFactResFirstComponent implements OnInit {

  @Input() compFactResItem: CompFactResItem[];
  currentAdIndex = -1;
  //@ViewChild(CompFactResDirective, {static: true}) compFactResHost: CompFactResDirective;
  @ViewChild('appCompFactResRef',{static:true,read: ViewContainerRef}) compFactResHost;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.compFactResItem.length;
    const adItem = this.compFactResItem[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    //const viewContainerRef = this.compFactResHost.viewContainerRef;
    const viewContainerRef = this.compFactResHost;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<CompFactResInterface>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/