import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAnimationComponent } from './material-animation.component';

describe('MaterialAnimationComponent', () => {
  let component: MaterialAnimationComponent;
  let fixture: ComponentFixture<MaterialAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
