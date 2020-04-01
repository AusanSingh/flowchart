import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFactResSecondComponent } from './comp-fact-res-second.component';

describe('CompFactResSecondComponent', () => {
  let component: CompFactResSecondComponent;
  let fixture: ComponentFixture<CompFactResSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFactResSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFactResSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
