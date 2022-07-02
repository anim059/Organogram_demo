import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNodeModalComponent } from './user-node-modal.component';

describe('UserNodeModalComponent', () => {
  let component: UserNodeModalComponent;
  let fixture: ComponentFixture<UserNodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNodeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
