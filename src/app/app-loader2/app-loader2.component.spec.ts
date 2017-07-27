import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoader2Component } from './app-loader2.component';

describe('AppLoader2Component', () => {
  let component: AppLoader2Component;
  let fixture: ComponentFixture<AppLoader2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLoader2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
