import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTreeDiagramComponent } from './user-tree-diagram.component';

describe('UserTreeDiagramComponent', () => {
  let component: UserTreeDiagramComponent;
  let fixture: ComponentFixture<UserTreeDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTreeDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTreeDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
