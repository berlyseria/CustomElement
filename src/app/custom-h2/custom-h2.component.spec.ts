import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomH2Component } from './custom-h2.component';

describe('CustomH2Component', () => {
  let component: CustomH2Component;
  let fixture: ComponentFixture<CustomH2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomH2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
