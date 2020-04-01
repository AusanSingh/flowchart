
import { Component, HostBinding,OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-material-animation',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './material-animation.component.html',
  styleUrls: ['./material-animation.component.scss']
})
export class MaterialAnimationComponent implements OnInit {

  constructor() { }

  title = 'new-angular-training';
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }

}
