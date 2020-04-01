import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFactResThirdComponent } from './comp-fact-res-third.component';

describe('CompFactResThirdComponent', () => {
  let component: CompFactResThirdComponent;
  let fixture: ComponentFixture<CompFactResThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFactResThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFactResThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
