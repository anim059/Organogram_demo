import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputFieldModalComponent } from './form-input-field-modal.component';

describe('FormInputFieldModalComponent', () => {
  let component: FormInputFieldModalComponent;
  let fixture: ComponentFixture<FormInputFieldModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputFieldModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputFieldModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
