import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrganogramComponent } from './view-organogram.component';

describe('ViewOrganogramComponent', () => {
  let component: ViewOrganogramComponent;
  let fixture: ComponentFixture<ViewOrganogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrganogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrganogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
