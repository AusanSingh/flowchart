import { Component, OnInit, Input } from '@angular/core';
import { CompFactResInterface } from '../comp-fact-res-interface.component';

@Component({
  selector: 'app-comp-fact-res-second',
  templateUrl: './comp-fact-res-second.component.html',
  styleUrls: ['./comp-fact-res-second.component.scss']
})
export class CompFactResSecondComponent implements OnInit,CompFactResInterface {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
