import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonChooserComponent } from './cartoon-chooser.component';

describe('CartoonChooserComponent', () => {
  let component: CartoonChooserComponent;
  let fixture: ComponentFixture<CartoonChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
