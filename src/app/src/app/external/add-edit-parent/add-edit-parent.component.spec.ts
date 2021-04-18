import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditParentComponent } from './add-edit-parent.component';

describe('AddEditParentComponent', () => {
  let component: AddEditParentComponent;
  let fixture: ComponentFixture<AddEditParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
