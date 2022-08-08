import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopformbuilderComponent } from './sopformbuilder.component';

describe('SopformbuilderComponent', () => {
  let component: SopformbuilderComponent;
  let fixture: ComponentFixture<SopformbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SopformbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SopformbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
