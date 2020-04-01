import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentFactoryResolverComponent } from './app-component-factory-resolver.component';

describe('AppComponentFactoryResolverComponent', () => {
  let component: AppComponentFactoryResolverComponent;
  let fixture: ComponentFixture<AppComponentFactoryResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponentFactoryResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentFactoryResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
