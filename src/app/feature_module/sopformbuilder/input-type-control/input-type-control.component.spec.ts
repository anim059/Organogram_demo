import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTypeControlComponent } from './input-type-control.component';

describe('InputTypeControlComponent', () => {
  let component: InputTypeControlComponent;
  let fixture: ComponentFixture<InputTypeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTypeControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTypeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
