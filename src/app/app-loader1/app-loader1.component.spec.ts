import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoader1Component } from './app-loader1.component';

describe('AppLoader1Component', () => {
  let component: AppLoader1Component;
  let fixture: ComponentFixture<AppLoader1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLoader1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
