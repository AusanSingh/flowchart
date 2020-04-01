import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VfBotWireframeComponent } from './vf-bot-wireframe.component';

describe('VfBotWireframeComponent', () => {
  let component: VfBotWireframeComponent;
  let fixture: ComponentFixture<VfBotWireframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VfBotWireframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VfBotWireframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
