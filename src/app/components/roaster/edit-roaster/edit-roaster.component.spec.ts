import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoasterComponent } from './edit-roaster.component';

describe('EditRoasterComponent', () => {
  let component: EditRoasterComponent;
  let fixture: ComponentFixture<EditRoasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRoasterComponent]
    });
    fixture = TestBed.createComponent(EditRoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
