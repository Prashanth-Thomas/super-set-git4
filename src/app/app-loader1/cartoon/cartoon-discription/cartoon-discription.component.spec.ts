import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonDiscriptionComponent } from './cartoon-discription.component';

describe('CartoonDiscriptionComponent', () => {
  let component: CartoonDiscriptionComponent;
  let fixture: ComponentFixture<CartoonDiscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonDiscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
