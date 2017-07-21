import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeChooserComponent } from './anime-chooser.component';

describe('AnimeChooserComponent', () => {
  let component: AnimeChooserComponent;
  let fixture: ComponentFixture<AnimeChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
