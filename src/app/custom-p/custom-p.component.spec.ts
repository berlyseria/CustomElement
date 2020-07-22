import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPComponent } from './custom-p.component';

describe('CustomPComponent', () => {
  let component: CustomPComponent;
  let fixture: ComponentFixture<CustomPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
