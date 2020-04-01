import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFactResFirstComponent } from './comp-fact-res-first.component';

describe('CompFactResFirstComponent', () => {
  let component: CompFactResFirstComponent;
  let fixture: ComponentFixture<CompFactResFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFactResFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFactResFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
