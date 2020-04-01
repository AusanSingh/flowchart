import { Injectable } from '@angular/core';
import { CompFactResItem } from './comp-fact-res-item';
import { CompFactResSecondComponent } from './comp-fact-res-second/comp-fact-res-second.component';
import { CompFactResThirdComponent } from './comp-fact-res-third/comp-fact-res-third.component';

@Injectable()
export class CompFactResService {

  constructor() { }
  getAds() {
    return [
      new CompFactResItem(CompFactResThirdComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new CompFactResItem(CompFactResThirdComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new CompFactResItem(CompFactResSecondComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new CompFactResItem(CompFactResSecondComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}
