import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAccordionContentComponent } from './custom-accordion-content.component';

describe('CustomAccordionContentComponent', () => {
  let component: CustomAccordionContentComponent;
  let fixture: ComponentFixture<CustomAccordionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAccordionContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAccordionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
