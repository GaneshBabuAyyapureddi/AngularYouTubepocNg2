import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionboxComponent } from './descriptionbox.component';

describe('DescriptionboxComponent', () => {
  let component: DescriptionboxComponent;
  let fixture: ComponentFixture<DescriptionboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
