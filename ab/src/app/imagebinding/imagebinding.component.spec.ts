import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagebindingComponent } from './imagebinding.component';

describe('ImagebindingComponent', () => {
  let component: ImagebindingComponent;
  let fixture: ComponentFixture<ImagebindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagebindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
