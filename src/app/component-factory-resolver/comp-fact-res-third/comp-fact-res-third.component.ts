import { Component, OnInit, Input } from '@angular/core';
import { CompFactResInterface } from '../comp-fact-res-interface.component';

@Component({
  selector: 'app-comp-fact-res-third',
  templateUrl: './comp-fact-res-third.component.html',
  styleUrls: ['./comp-fact-res-third.component.scss']
})
export class CompFactResThirdComponent implements OnInit,CompFactResInterface {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
