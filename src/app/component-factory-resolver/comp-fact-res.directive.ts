import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-comp-fact-res]'
})
export class CompFactResDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
